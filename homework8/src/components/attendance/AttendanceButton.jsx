import * as S from "./Attendance.style";

export default function AttendanceButton({
  status,
  handleAttendance,
  buttonColor,
}) {
  return (
    <S.CheckAttendance onClick={handleAttendance} bgColor={buttonColor}>
      {status || "출석하기"}
    </S.CheckAttendance>
  );
}
