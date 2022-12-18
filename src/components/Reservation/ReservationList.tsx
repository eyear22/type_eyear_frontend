import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const PlusIcon = process.env.PUBLIC_URL + '/img/plus.png';
const MinusIcon = process.env.PUBLIC_URL + '/img/minus.png';

const timeData = [
  { value: 0, name: '10:00~10:50' },
  { value: 1, name: '11:00~11:50' },
  { value: 2, name: '13:00~13:50' },
  { value: 3, name: '14:00~14:50' },
  { value: 4, name: '15:00~15:50' },
  { value: 5, name: '16:00~16:50' },
  { value: 6, name: '17:00~17:50' },
];

const ReservationList = () => {
  const [approve, setApprove] = useState(false);
  const [request, setRequest] = useState(false);
  const [deny, setDeny] = useState(false);

  const reservations = useSelector((state: any) => state.reservation.data);

  // 시간 텍스트로 리턴
  const exportTime = (num: number) => timeData.map((item) => item.value === num && item.name);

  return (
    <>
      <Container>
        <Box open={approve}>
          <h4>
            승인된 면회<span>{reservations != null && reservations.reservations['1'].length}</span>
          </h4>
          <button onClick={() => setApprove(!approve)}>
            <img src={approve ? MinusIcon : PlusIcon} alt="" />
          </button>
        </Box>
        {approve && (
          <UnderBox>
            {reservations != null &&
              reservations.reservations['1'].map((item: any, index: number) => (
                <Item key={index}>
                  <div className="face">{item.reservation_faceToface ? '대면' : '비대면'}</div>
                  <div className="time">{exportTime(item.reservation_timetableIndex)}</div>
                  <div className="date">{item.reservation_reservationDate}</div>
                </Item>
              ))}
          </UnderBox>
        )}
        <Box open={request}>
          <h4>
            신청한 면회<span>{reservations != null && reservations.reservations['0'].length}</span>
          </h4>
          <button onClick={() => setRequest(!request)}>
            <img src={request ? MinusIcon : PlusIcon} alt="" />
          </button>
        </Box>
        {request && (
          <UnderBox>
            {reservations != null &&
              reservations.reservations['0'].map((item: any, index: number) => (
                <Item key={index}>
                  <div className="face">{item.reservation_faceToface ? '대면' : '비대면'}</div>
                  <div className="time">{exportTime(item.reservation_timetableIndex)}</div>
                  <div className="date">{item.reservation_reservationDate}</div>
                </Item>
              ))}
          </UnderBox>
        )}
        <Box open={deny}>
          <h4>
            거절된 면회<span>{reservations != null && reservations.reservations['-1'].length}</span>
          </h4>
          <button onClick={() => setDeny(!deny)}>
            <img src={deny ? MinusIcon : PlusIcon} alt="" />
          </button>
        </Box>
        {deny && (
          <UnderBox>
            {reservations != null &&
              reservations.reservations['-1'].map((item: any, index: number) => (
                <Item key={index}>
                  <div className="face">{item.reservation_faceToface ? '대면' : '비대면'}</div>
                  <div className="time">{exportTime(item.reservation_timetableIndex)}</div>
                  <div className="date">{item.reservation_reservationDate}</div>
                </Item>
              ))}
          </UnderBox>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  padding: 20px 24px;
  background: #ffffff;
  border: 1px solid #dadee2;
  border-radius: 20px;
  box-sizing: border-box;
  margin-bottom: 24px;
  h4 {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    text-align: center;
    color: #2f2f2f;
    margin: 0;
  }
  span {
    margin-left: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 22px;
    text-align: center;
    color: rgba(47, 47, 47, 0.4);
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    background: #e5edff;
    height: 36px;
    width: 36px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    background-color: ${(props) => (props.open ? '#EFF0F6' : '#E5EDFF')};
    img {
      width: 12px;
    }
  }
`;

const UnderBox = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 95px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #dadee2;
  border-radius: 20px;
  box-sizing: border-box;
`;

const Item = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 16px;
  border-radius: 10px;
  white-space: pre;
  box-sizing: border-box;
  align-items: center;
  .face {
    width: 10%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.154px;
    color: #70768c;
  }
  .time {
    width: 80%;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
  }
  .date {
    display: flex;
    justify-content: flex-end;
    width: 10%;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    color: #000000;
  }
  &:hover {
    background-color: #eff0f6;
  }
`;

export default ReservationList;
