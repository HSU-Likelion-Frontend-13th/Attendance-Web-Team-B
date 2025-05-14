import React, { useState, useEffect } from "react";
import * as S from "../components/attendance/Attendance.style";
import AttendanceHeader from "../components/attendance/AttendacneHeader";
import SubjectInfo from "../components/attendance/SubjectInfo";
import AttendanceButton from "../components/attendance/AttendanceButton";
import AttendanceModal from "../components/attendance/AttendanceModal";

export default function Attendance() {
  const [status, setStatus] = useState("");
  const [buttonColor, setButtonColor] = useState("#004098");
  const [currentSubject, setCurrentSubject] = useState("subject1");
  const [showModal, setShowModal] = useState(false);

  const [subjectName, setSubjectName] = useState({
    name: {
      subject1: "건강과 필라테스 체험 [7]",
      subject2: "조직행동론 [7]",
      subject3: "삶과 꿈 [N]",
      subject4: "기업 윤리 [N]",
    },
    time: {
      subject1: "수업 시간 | 09:00~10:30",
      subject2: "수업 시간 | 12:00~13:30",
      subject3: "수업 시간 | 14:00~17:30",
      subject4: "수업 시간 | 17:30~19:00",
    },
    attendance: {
      subject1: "",
      subject2: "",
      subject3: "",
      subject4: "",
    },
  });

  const [attendanceStatus, setAttendanceStatus] = useState({
    "건강과 필라테스 체험 [7]": {},
    "조직행동론 [7]": {},
    "삶과 꿈 [N]": {},
    "기업 윤리 [N]": {},
  });

  useEffect(() => {
    const now = new Date();
    const nowMin = now.getHours() * 60 + now.getMinutes();

    const subjectTimes = [
      { name: "subject1", start: 9 * 60, end: 10 * 60 + 30 },
      { name: "subject2", start: 12 * 60, end: 13 * 60 + 30 },
      { name: "subject3", start: 14 * 60, end: 17 * 60 + 30 },
      { name: "subject4", start: 17 * 60, end: 19 * 60 },
    ];

    const current = subjectTimes.find(
      (subject) => nowMin >= subject.start && nowMin < subject.end
    );

    if (current) {
      setCurrentSubject(current.name);
    } else {
      setCurrentSubject("subject1");
    }
  }, []);

  const CustomDate = () => {
    const today = new Date();
    const date = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 (${["일", "월", "화", "수", "목", "금", "토"][today.getDay()]})`;
    const time = `${today.getHours()} : ${today.getMinutes().toString().padStart(2, "0")}`;
    return `${date}\n${time}`;
  };

  const handleAttendance = () => {
    const now = new Date();
    const subjectTimeString = subjectName.time[currentSubject];
    const timeMatch = subjectTimeString.match(/\d{2}:\d{2}/);

    if (!timeMatch) {
      setStatus("시간 정보 없음");
      return;
    }

    const [hourStr, minStr] = timeMatch[0].split(":");
    const classHour = parseInt(hourStr);
    const classMinute = parseInt(minStr);

    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const classStartMinutes = classHour * 60 + classMinute;
    const diff = nowMinutes - classStartMinutes;

    let newAttendanceStatus = "";

    if (diff >= -5 && diff <= 5) {
      newAttendanceStatus = "정상 출석";
      setButtonColor("#28a745");
    } else if (diff > 5 && diff <= 10) {
      newAttendanceStatus = "지각";
      setButtonColor("#FFF600");
    } else if (diff > 10) {
      newAttendanceStatus = "결석";
      setButtonColor("#FF0000");
    } else {
      newAttendanceStatus = "출석하기";
      setButtonColor("#7C7C7C");
    }

    const week = "5주차"; // 임시, 자동 계산 가능
    const subjectTitle = subjectName.name[currentSubject];

    setAttendanceStatus((prev) => ({
      ...prev,
      [subjectTitle]: {
        ...prev[subjectTitle],
        [week]:
          newAttendanceStatus === "정상 출석"
            ? "present"
            : newAttendanceStatus === "지각"
            ? "late"
            : newAttendanceStatus === "결석"
            ? "absent"
            : "",
      },
    }));

    setSubjectName((prev) => ({
      ...prev,
      attendance: {
        ...prev.attendance,
        [currentSubject]: newAttendanceStatus,
      },
    }));

    setStatus(newAttendanceStatus);
  };

  return (
    <>
      <AttendanceHeader subjectName={subjectName} onResultClick={() => setShowModal(true)} />
      <S.AttendanceLayout>
        <S.AttendanceCheck>출석체크</S.AttendanceCheck>
        <SubjectInfo currentSubject={currentSubject} subjectName={subjectName} />
        <S.Time>{CustomDate()}</S.Time>
        <AttendanceButton
          status={status}
          handleAttendance={handleAttendance}
          buttonColor={buttonColor}
        />
      </S.AttendanceLayout>

      {showModal && (
        <AttendanceModal
          onClose={() => setShowModal(false)}
          currentSubject={currentSubject}
          subjectName={subjectName}
          attendanceStatus={attendanceStatus}
        />
      )}
    </>
  );
}
