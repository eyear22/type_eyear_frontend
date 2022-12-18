import React, { useState } from 'react';
import styled from 'styled-components';
const PlusIcon = process.env.PUBLIC_URL + '/img/plus.png';
const MinusIcon = process.env.PUBLIC_URL + '/img/minus.png';

const ReservationList = () => {
  const [approve, setApprove] = useState(false);
  const [request, setRequest] = useState(false);
  const [deny, setDeny] = useState(false);

  return (
    <>
      <Container>
        <Box open={approve}>
          <h4>
            승인된 면회<span>0</span>
          </h4>
          <button onClick={() => setApprove(!approve)}>
            <img src={approve ? MinusIcon : PlusIcon} alt="" />
          </button>
        </Box>
        {approve && <UnderBox />}
        <Box open={request}>
          <h4>
            신청한 면회<span>0</span>
          </h4>
          <button onClick={() => setRequest(!request)}>
            <img src={request ? MinusIcon : PlusIcon} alt="" />
          </button>
        </Box>
        {request && <UnderBox />}
        <Box open={deny}>
          <h4>
            거절된 면회<span>0</span>
          </h4>
          <button onClick={() => setDeny(!deny)}>
            <img src={deny ? MinusIcon : PlusIcon} alt="" />
          </button>
        </Box>
        {deny && <UnderBox />}
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
  .item {
    display: flex;
    width: 100%;
    flex-direction: row;
    padding: 16px;
    border-radius: 10px;
    white-space: pre;
    cursor: pointer;
    .num {
      width: 10%;
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;
      color: #000000;
    }
    .name {
      width: 70%;
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;
      color: #000000;
    }
    .hos {
      width: 20%;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.154px;
      color: #70768c;
    }
    &:hover {
      background-color: #eff0f6;
    }
  }
`;

export default ReservationList;
