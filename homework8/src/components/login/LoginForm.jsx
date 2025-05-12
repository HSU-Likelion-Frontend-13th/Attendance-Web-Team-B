import { useEffect, useState } from "react";
import * as S from "./LoginForm.style";

export default function LoginForm() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [errors, setErrors] = useState({});
    const [isSignUp, setIsSignUp] = useState(false);
    
    const USER_REGEX = /^[가-힣]+$/;
    const ID_REGEX = /^\d{7}$/;

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
        return;
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
            <S.LoginBox onSubmit = { handleSubmit }>
                <S.Title>{ isSignUp ? "회원가입" : "로그인" }</S.Title>

                <S.InputWrapper>
                <S.Label>이름</S.Label>
                <S.Input
                    type = "text"
                    placeholder = "이름을 입력하세요."
                    value = { name }
                    onChange = { (e) => setName(e.target.value) }
                    isValid = { USER_REGEX.test(name) }
                />
                { errors.name ? <S.ErrorText>{ errors.name }</S.ErrorText> : null}
                </S.InputWrapper>

                <S.InputWrapper>
                <S.Label>학번</S.Label>
                <S.Input
                    type = "text"
                    placeholder = "학번을 입력하세요."
                    value = { id }
                    onChange = { (e) => setId(e.target.value) }
                    isValid = { ID_REGEX.test(id) }
                />
                { errors.id ? <S.ErrorText>{ errors.id }</S.ErrorText> : null}
                </S.InputWrapper>
                
                <S.Button type = "submit">{ isSignUp ? "회원가입" : "로그인" }</S.Button>
                { !isSignUp ? (
                    <S.Button 
                        type = "button" 
                        onClick = { () => setIsSignUp(true) } 
                        isSecondary
                    >
                    회원가입
                    </S.Button>
                ) : (
                    <S.Button 
                        type = "button" 
                        onClick = { () => setIsSignUp(false) } 
                        isSecondary
                    >
                    로그인
                    </S.Button>
                )}
            </S.LoginBox>
        </S.LoginLayout>
    );
}