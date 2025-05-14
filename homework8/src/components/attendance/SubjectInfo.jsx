import * as S from "./Attendance.style";

export default function SubjectInfo({ currentSubject, subjectName }) {
  return (
    <>
      <S.Subject>{subjectName.name[currentSubject]}</S.Subject>
      <S.SubjectTime>{subjectName.time[currentSubject]}</S.SubjectTime>
    </>
  );
}
