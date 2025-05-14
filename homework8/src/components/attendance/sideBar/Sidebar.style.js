import styled from "styled-components";

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw;
`;

export const TodayAttendance = styled.h2`
  font-size: 4.2vw; /* 약 80px */
  font-weight: bold;
  color: #333;
  padding-bottom: 4vw;
`;

export const SubjectCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  padding: 1.1vw 1.4vw;
  margin-bottom: 1.1vw;
  background-color: white;
  border: 0.1vw solid #004098;
  border-radius: 1vw;
`;

export const SubjectInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubjectName = styled.div`
  font-size: 2.6vw; /* 약 48px */
  font-weight: bold;
  color: #000;
`;

export const SubjectTime = styled.div`
  font-size: 1.5vw; /* 약 28px */
  color: #999;
  margin-top: 0.3vw;
`;

export const AttendanceStatus = styled.div`
  width: 12vw;    /* 약 160px */
  height: 5vw;    /* 약 80px */
  font-size: 2vw; /* 약 40px */
  font-weight: bold;
  background-color: ${({ bgColor }) => bgColor || "#000000"};
  color: ${({ bgColor }) => (bgColor === "#FFF600" ? "#000" : "#fff")};
  border-radius: 2.5vw; /* 타원형 */
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;
