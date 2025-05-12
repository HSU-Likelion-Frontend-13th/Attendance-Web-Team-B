import { useEffect, useState } from "react";
import * as S from "./LoginForm.style";

export default function LoginForm() {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});
    
    const USER_REGEX = /^[가-힣]+$/;
    const ID_REGEX = /^\d{7}$/;

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValidName = USER_REGEX.test(name);

        if (!isValidName) {
            setErrors({ name: "한글만 입력 가능합니다." });
        } else {
            setErrors({});
        return;
        }
    }

    useEffect(() => {
        if (USER_REGEX.test(name)) {
            setErrors((prev) => ({ ...prev, name: undefined }));
        }
    }, [name]);

    return (
        <S.LoginLayout>
            <S.LoginBox onSubmit = { handleSubmit }>
                <S.Title>로그인</S.Title>
                <S.Label>이름</S.Label>
                <S.Input
                    type = "text"
                    placeholder = "한글만 입력 가능합니다."
                    value = { name }
                    onChange = { (e) => setName(e.target.value) }
                    isValid = { USER_REGEX.test(name) }
                />
                { errors.name ? <S.ErrorText>{ errors.name }</S.ErrorText> : null}
                <S.Button type = "submit">로그인</S.Button>
            </S.LoginBox>
        </S.LoginLayout>
    );
}