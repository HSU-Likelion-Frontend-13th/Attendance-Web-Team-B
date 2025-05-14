
import * as S from "../components/attendance/sideBar/Sidebar.style";
import React from "react";
import { useLocation } from "react-router-dom";
import AttendanceHeader from "../components/attendance/AttendacneHeader";
export default function AttendanceResult() {
  const location = useLocation();
  const subjectName = location.state?.subjectName;

  if (!subjectName || !subjectName.name || !subjectName.attendance) {
    return <S.Sidebar>출석 정보 없음</S.Sidebar>;
  }

  return (
    <>
    <AttendanceHeader/>
    <S.Sidebar>
      <S.TodayAttendance>오늘의 출석 결과</S.TodayAttendance>

      {Object.keys(subjectName.name).map((key) => (
        <S.SubjectCard
          key={key}
          bgColor={getBgColor(subjectName.attendance[key])}
        >
          <S.SubjectInfo>
            <S.SubjectName>{subjectName.name[key]}</S.SubjectName>
            <S.SubjectTime>{subjectName.time[key]}</S.SubjectTime>
          </S.SubjectInfo>
          <S.AttendanceStatus bgColor={getBgColor(subjectName.attendance[key])}>
            {subjectName.attendance[key] || "출석하기"}
          </S.AttendanceStatus>
        </S.SubjectCard>
      ))}
    </S.Sidebar>
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
