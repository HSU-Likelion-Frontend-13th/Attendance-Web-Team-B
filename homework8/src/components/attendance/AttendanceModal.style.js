import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 68, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    backdrop-filter: blur(5px);
`;

export const ModalBox = styled.div`
    background: white;
    padding: 1.25vw;
    border: 5px solid #004098;
    border-radius: 20px 20px 0px 0px;
    width: 100vw;
    height: 50vh;
    position: relative;
    box-sizing: border-box;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 0.63vw;
    right: 0.63vw;
    background: none;
    border: none;
    font-size: 40px;
    cursor: pointer;
`;

export const Title = styled.h3`
    text-align: center;
    font-size: 3.13vw;
    margin-bottom: 0.63vw;
`;

export const TimeText = styled.p`
    text-align: center;
    color: #7C7C7C;
    font-size: 1.82vw;
    font-weight: 500;
    margin-bottom: 2.24vw;
`;

export const WeekText = styled.p`
    text-align: center;
    color: #7C7C7C;
    font-size: 1.82vw;
    font-weight: 400;
    margin-bottom: 1.04vw;
`

export const WeekContainer = styled.div`
    display: flex;
    gap: 0.52vw;
    margin-bottom: 1.56vw;
    justify-content: center; 
`;

export const WeekCircle = styled.div`
    padding: 1.04vw;
    border-radius: 2vw;
    border: 1px solid #004098;
    font-size: 1.67vw;
    font-weight: 200;
    background: #FFFFFF;
`;