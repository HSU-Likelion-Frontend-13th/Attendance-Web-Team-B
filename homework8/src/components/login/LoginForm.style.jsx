import styled from "styled-components";

export const LoginLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 2.3438vw;
    font-weight: bolder;
    margin-bottom: 3.6458vw;
`;

export const Label = styled.label`
    font-size: 1.3021vw;
    font-weight: 300;
    margin-bottom: 0.3646vw;
    color: grey;
`;

export const LoginBox = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Input = styled.input`
    padding: 0.625vw;
    padding-left: 1.5625vw;
    height: 2.5vw;
    border: 1px solid ${(props) =>
        props.isValid ? 'blue' : props.isValid === false ? 'red' : '#ccc'};
    border-radius: 1.3vw;
    font-size: 1.1458vw;

    background-color: ${(props) =>
        props.isValid ? '#e0f1ff' : props.isValid === false ? '#ffdada' : '#ffffff'};
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1vw;
`;

export const Button = styled.button`
    width: 27.6042vw;
    height: 2.7083vw;
    background-color: ${props => props.isSecondary ? "#ffffff" : "#002f9f"};
    color: ${props => props.isSecondary ? "#979797" : "#ffffff"};
    font-size: ${props => props.isSecondary ? "1.0938vw" : "1.4583vw"};
    font-weight: ${props => props.isSecondary ? "600" : "700"};
    border: none;
    border-radius: 1.3vw;
    cursor: pointer;
    margin-top: 1.0417vw;

    text-decoration: ${props => props.isSecondary ? "underline" : "none"};

    &:hover {
        background-color: ${props => props.isSecondary ? "#ffffff" : "#002f9f"};
    }
`;

export const ErrorText = styled.div`
    color: red;
    font-size: 0.677vw;
    margin-top: 0.4167vw;
    margin-bottom: 0.625vw;
`;