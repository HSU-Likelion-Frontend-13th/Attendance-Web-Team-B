import styled from "styled-components";

export const AttendanceLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1vw;
  margin-bottom: 5.5em;
`;

// 헤더 영역
export const HeaderLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5vw;
  width: 100%;
`;

export const Icon = styled.img`
  height: 5vw;
  width: 10vw;
`;

export const MenuIcon = styled.div`
  font-size: 2vw;
  cursor: pointer;
  padding-right: 2vw;
`;

// 타이틀 및 과목
export const AttendanceCheck = styled.div`
  font-size: 3.1vw; /* 약 60px */
  color: #484747;
  margin-top: 2vw;
  font-weight: bold;
  margin-bottom: 3vw;
`;

export const Subject = styled.div`
  font-size: 3.1vw; /* 약 60px */
  color: #000000;
  margin-top: 1.5vw;
  font-weight: bold;
  margin-bottom: 1.5vw;
`;

export const SubjectTime = styled.div`
  font-size: 2vw;/*약 40px*/
  color: #7C7C7C;
  margin-bottom: 5vw;
`;

export const Time = styled.div`
  font-size: 2.2vw;/* 약 48px */
  color: #000000;
  margin-bottom: 2.6vw;
  white-space: pre-line;
  text-align: center;
`;

export const CurrentTime = styled.div`
  font-size: 1vw;
  color: #000000;
  margin-top: 0.5vw;
`;

// 출석하기 버튼
export const CheckAttendance = styled.div`
  width: 25.52vw;       /* 490px */
  height: 6.46vw;       /* 124px */
  background-color: ${(props) => props.bgColor || "#004098"};
  color: white;
  font-size: 2.1vw;/* 약 58px */
  font-weight: bold;
  border-radius: 2.5vw; /* height의 절반 (타원 유지) */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 2vw;
`;


export const AttendanceStatus = styled.div`
  font-size: 1vw;
  color: #7C7C7C;
  margin-top: 0.5vw;
`;
