import styled from "styled-components";

export const LoginLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 60px;   
`

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 32px;
`;

export const Label = styled.label`
    font-weight: 600;
    margin-bottom: 6px;
    color: grey;
`;

export const LoginBox = styled.form`
    display: flex;
    flex-direction: column;
    width: 320px;
`;

export const Input = styled.input`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-bottom: 10px;
    font-size: 14px;
`;

export const Button = styled.button`
    background-color: #002f9f;
    color: white;
    padding: 14px 0;
    font-size: 16px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    margin-top: 20px;
    
    &:hover {
    background-color: #001f70;
    }
`;