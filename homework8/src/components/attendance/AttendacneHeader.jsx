import * as S from "./Attendance.style";
import LOGO from "../../assets/likelion.svg";
import { useNavigate } from "react-router-dom";

export default function AttendanceHeader({ subjectName }) {
  const navigate = useNavigate();

  const handleResultClick = () => {
    navigate("/result", { state: { subjectName } });
  };

  return (
    <S.HeaderLayout>
      <S.Icon src={LOGO} alt="logo" />
      <S.MenuIcon type="button" onClick={handleResultClick}>
        ☰
      </S.MenuIcon>
    </S.HeaderLayout>
  );
}
