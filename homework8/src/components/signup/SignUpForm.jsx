import { useEffect, useState } from "react";
import * as S from "../login/LoginForm.style";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [errors, setErrors] = useState({});

    const [touched, setTouched] = useState({
    name: false,
    id: false,
    });

    const USER_REGEX = /^[가-힣]+$/;
    const ID_REGEX = /^\d{7}$/;

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValidName = USER_REGEX.test(name);
        const isValidId = ID_REGEX.test(id);

        if (!isValidName || !isValidId) {
            setErrors({
                name: !isValidName ? "한글만 입력 가능합니다." : undefined,
                id: !isValidId ? "7자리 숫자만 입력 가능합니다." : undefined,
            });
        } else {
            setErrors({});
            navigate("/login");
        }
    }

    useEffect(() => {
        if (USER_REGEX.test(name)) {
            setErrors((prev) => ({ ...prev, name: undefined }));
        }
    }, [name]);

    useEffect(() => {
        if (ID_REGEX.test(id)) {
            setErrors((prev) => ({ ...prev, id: undefined }));
        }
    }, [id]);

    return (
        <S.LoginLayout>
            <S.LoginBox onSubmit={handleSubmit}>
                <S.Title>회원가입</S.Title>

                <S.InputWrapper>
                    <S.Label>이름</S.Label>
                    <S.Input
                        type="text"
                        placeholder="이름을 입력하세요."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                        isValid={touched.name ? USER_REGEX.test(name) : undefined}
                    />
                    {errors.name && <S.ErrorText>{errors.name}</S.ErrorText>}
                </S.InputWrapper>

                <S.InputWrapper>
                    <S.Label>학번</S.Label>
                    <S.Input
                        type="text"
                        placeholder="학번을 입력하세요."
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        onBlur={() => setTouched((prev) => ({ ...prev, id: true }))}
                        isValid={touched.id ? ID_REGEX.test(id) : undefined}                    />
                    {errors.id && <S.ErrorText>{errors.id}</S.ErrorText>}
                </S.InputWrapper>

                <S.Button type="submit">회원가입</S.Button>

                <S.Button
                    type="button"
                    onClick={() => navigate("/login")}
                    isSecondary
                >
                    로그인
                </S.Button>
            </S.LoginBox>
        </S.LoginLayout>
    );
}