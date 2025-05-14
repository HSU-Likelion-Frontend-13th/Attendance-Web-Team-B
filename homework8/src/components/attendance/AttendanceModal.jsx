import React from "react";
import * as S from "./AttendanceModal.style";  

const AttendanceModal = ({ subject, onClose }) => {
    const midWeek = [];
    for (let i = 1; i <= 7; i++) {
        midWeek.push(`${i}주차`);
    }
    midWeek.push('중간고사');

    const lastWeek = [];
    for (let i = 9; i <= 15; i++) {
        lastWeek.push(`${i}주차`);
    }
    lastWeek.push('기말고사');

    const statusColor = (status) => {
        switch(status) {
            case 'present':
                return 'rgba(0, 64, 152, 0.6)';
            case 'absent':
                return 'rgba(255, 0, 0, 0.6)'; 
            case 'late':
                return 'rgba(255, 247, 0, 0.6)';
            default:
                return 'rgba(255, 255, 255, 0.6)'; 
        }
    };
    
  return (
    <S.Overlay>
      <S.ModalBox>
        <S.CloseButton onClick={onClose}>⨉</S.CloseButton>
        <S.Title>{subject.name}</S.Title>
        <S.TimeText>{subject.time}</S.TimeText>
        <S.WeekText>{subject.attendance}</S.WeekText>
        <S.WeekContainer>
                {midWeek.map((week, index) => (
                    <S.WeekCircle key={index} style={{backgroundColor: statusColor(midWeek)}}>{week}</S.WeekCircle>
                ))}
            </S.WeekContainer>
            <S.WeekContainer>
                {lastWeek.map((week, index) => (
                    <S.WeekCircle key={index} style={{backgroundColor: statusColor(lastWeek)}}>{week}</S.WeekCircle>
                ))}
            </S.WeekContainer>
      </S.ModalBox>
    </S.Overlay>
  );
};

export default AttendanceModal;