import * as S from "../components/attendance/Attendance.style";
import React, { useState, useEffect } from "react";
import SubjectInfo from "../components/attendance/SubjectInfo";
import AttendanceButton from "../components/attendance/AttendanceButton";
import AttendanceHeader from "../components/attendance/AttendacneHeader";
export default function Attendance() {
  const [status, setStatus] = useState("");
  const [buttonColor, setButtonColor] = useState("#004098");
  const [currentSubject, setCurrentSubject] = useState("subject1");

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
    }
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
    const time = `${today.getHours()} : ${today.getMinutes()}`;
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

    setSubjectName((prev) => ({
      ...prev,
      attendance: {
        ...prev.attendance,
        [currentSubject]: newAttendanceStatus,
      }
    }));

    setStatus(newAttendanceStatus);
  };


  return (
    <>
    <AttendanceHeader subjectName={subjectName}/>
    <S.AttendanceLayout>
      
      <S.AttendanceCheck>출석체크</S.AttendanceCheck>

      <SubjectInfo
        currentSubject={currentSubject}
        subjectName={subjectName}
      />
      <S.Time>{CustomDate()}</S.Time>

      <AttendanceButton
        status={status}
        handleAttendance={handleAttendance}
        buttonColor={buttonColor}
      />

    </S.AttendanceLayout>
    </>
  );
  
}
