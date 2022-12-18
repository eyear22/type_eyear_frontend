import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import StyledDropDown from '../../common/StyledDropDown';
import { PostReservation } from '../../redux/reservation';

const timeData = [
  { value: 0, name: '10:00~10:50' },
  { value: 1, name: '11:00~11:50' },
  { value: 2, name: '13:00~13:50' },
  { value: 3, name: '14:00~14:50' },
  { value: 4, name: '15:00~15:50' },
  { value: 5, name: '16:00~16:50' },
  { value: 6, name: '17:00~17:50' },
];

const ReservationForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(timeData[0]);
  const [face, setFace] = useState('notface');

  const dispatch = useDispatch<any>();

  const registerReservation = () => {
    console.log(time);
    console.log(date);
    console.log(face);
    dispatch(PostReservation(date, time.value, face === 'notface' ? false : true));
  };
  return (
    <>
      <Container>
        <Left>
          <Title>대면 여부</Title>
          <RadioWrap>
            <input
              type="radio"
              name="theme"
              value="notface"
              onChange={(e) => setFace(e.target.value)}
              checked={face === 'notface'}
            />
            <span>비대면</span>
            <input
              type="radio"
              name="theme"
              value="face"
              onChange={(e) => setFace(e.target.value)}
              checked={face === 'face'}
            />
            <span>대면</span>
          </RadioWrap>
          <Title>예약 날짜</Title>
          <Input value={date} onChange={(e) => setDate(e.target.value)} placeholder="2022-12-17" />
        </Left>
        <Right>
          <Title>예약 시간</Title>
          <StyledDropDown type="default" data={timeData} current={time} setCurrent={setTime} />
        </Right>
      </Container>
      <Button onClick={registerReservation}>신청하기</Button>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: #191919;
  margin-bottom: 8px;
  text-align: start;
`;

const Input = styled.input`
  border: 1px solid #dadee2;
  margin-bottom: 40px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 1em;
  width: 100%;
  padding-left: 1.8em;
`;

const RadioWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 49px;
  height: 48px;
  input {
  }
  span {
    margin-left: 5px;
    margin-right: 20px;
  }
`;

const Button = styled.button`
  display: flex;
  margin-top: auto;
  margin-left: auto;
  background: #0029ff;
  justify-content: center;
  border-radius: 8px;
  padding: 10px 16px;
  border: none;
  width: 100px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #ffffff;
  cursor: pointer;
`;

export default ReservationForm;
