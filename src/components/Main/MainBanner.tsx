/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
const Envelope = process.env.PUBLIC_URL + '/img/home_eyear.png';

const MainBanner = () => {
  return (
    <>
      <Container>
        <Title>{'진심을 전하는' + '\n' + '가장 쉬운 방법 '}</Title>
        <Desc>
          {'스마트폰 못쓰는 우리 엄마' +
            '\n' +
            '보청기 착용해야 통화하는 우리 아빠' +
            '\n' +
            '\n' +
            '아이어가 자막 한수 놓아드릴게요.'}
        </Desc>
        <Image src={Envelope} alt="" />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f1f5ff;
  height: 750px;
  position: relative;
`;

const Title = styled.h1`
  white-space: pre;
  color: #0049fb;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-left: 128px;
  margin-top: 160px;
  span {
    font-size: 50px;
    color: #000000;
  }
`;

const Desc = styled.div`
  display: flex;
  margin-left: 128px;
  white-space: pre;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #2a2a2a;
`;

const Image = styled.img`
  position: absolute;
  right: 108px;
  height: 636px;
  width: 959px;
`;

export default MainBanner;
