import * as S from "../components/attendance/sideBar/Sidebar.style";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AttendanceHeader from "../components/attendance/AttendacneHeader";
import AttendanceModal from "../components/attendance/AttendanceModal";

export default function AttendanceResult() {
  const location = useLocation();
  const subjectName = location.state?.subjectName;

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!subjectName || !subjectName.name || !subjectName.attendance) {
    return <S.Sidebar>출석 정보 없음</S.Sidebar>;
  }

  const handleCardClick = (subjectKey) => {
    const selected = {
      name: subjectName.name[subjectKey],
      time: subjectName.time[subjectKey],
      attendance: subjectName.attendance[subjectKey],
    };
    setSelectedSubject(selected);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AttendanceHeader />
      <S.Sidebar>
        <S.TodayAttendance>오늘의 출석 결과</S.TodayAttendance>

        {Object.keys(subjectName.name).map((key) => (
          <S.SubjectCard
            key={key}
            bgColor={getBgColor(subjectName.attendance[key])}
            onClick={() => handleCardClick(key)}
          >
            <S.SubjectInfo>
              <S.SubjectName as="button" onClick={() => handleCardClick(key)}>
                {subjectName.name[key]}
              </S.SubjectName>
              <S.SubjectTime>{subjectName.time[key]}</S.SubjectTime>
            </S.SubjectInfo>
            <S.AttendanceStatus bgColor={getBgColor(subjectName.attendance[key])}>
              {subjectName.attendance[key] || "출석하기"}
            </S.AttendanceStatus>
          </S.SubjectCard>
        ))}
      </S.Sidebar>

      {/* 모달이 열릴 때만 렌더링 */}
      {isModalOpen && selectedSubject && (
        <AttendanceModal subject={selectedSubject} onClose={closeModal} />
      )}
    </>
  );

  function getBgColor(status) {
    switch (status) {
      case "정상 출석":
        return "#004098";
      case "지각":
        return "#FFF600";
      case "결석":
        return "#FF0000";
      default:
        return "#D9D9D9"; // 출석 전 상태
    }
  }
}
