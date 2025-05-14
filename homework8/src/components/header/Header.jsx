import * as S from "./Header.style";
import LOGO from "../../assets/likelion.svg"

export default function Header() {
    
    return (
        <S.HeaderLayout>
            <S.Icon src = { LOGO } alt = "logo" />
        </S.HeaderLayout>
    );
}