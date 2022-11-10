import styled from 'styled-components';

const DotCheck = process.env.PUBLIC_URL + '/img/mailDotCheck.png';
const Dot2 = process.env.PUBLIC_URL + '/img/mailDot2.png';
const Dot3 = process.env.PUBLIC_URL + '/img/mailDot3.png';
const ArrowRight = process.env.PUBLIC_URL + '/img/mailArrowRight.png';
const ArrowLeft = process.env.PUBLIC_URL + '/img/mailArrowLeft.png';
const MailBasic = process.env.PUBLIC_URL + '/img/mailBasic.png';

const MailDots = () => {
  return (
    <>
      <Container>
        <Dots>
          <img src={DotCheck} alt="" />
          <div className="line" />
          <img src={Dot2} alt="" />
          <div className="line" />
          <img src={Dot3} alt="" />
        </Dots>
        <Title>{'홍길동님께' + '\n' + '편지를 보내볼까요?'}</Title>
      </Container>
      <Content>
        <Arrow src={ArrowLeft} alt="" />
        <MailWrap>
          <img src={MailBasic} alt="" />
          <div className="receiver">ss</div>
        </MailWrap>
        <Arrow src={ArrowRight} alt="" />
      </Content>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 96px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 622px;
`;

const Dots = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transform: translateY(10px);
  img {
    width: 18px;
    height: 18px;
  }
  .line {
    width: 18px;
    height: 0;
    opacity: 0.05;
    border: 1px solid #000000;
    margin: 0 8px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  width: 175px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 120%;
  color: #000000;
  white-space: pre;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Arrow = styled.img`
  width: 158px;
  height: 158px;
  cursor: pointer;
`;

const MailWrap = styled.div`
  display: flex;
  img {
    width: 630px;
    height: 403px;
    object-fit: cover;
  }
  .receiver {
    position: absolute;
    width: 158px;
    height: 38px;
    left: 685px;
    top: 485px;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
`;

export default MailDots;
