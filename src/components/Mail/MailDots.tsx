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
        <Title>{'영상 우편을 보낼' + '\n' + '가족을 선택해주세요.'}</Title>
      </Container>
      <Content>
        <img src={ArrowLeft} alt="" />
        <img src={MailBasic} alt="" className="mailWrap"></img>
        <img src={ArrowRight} alt="" />
      </Content>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 240px;
  margin-bottom: 96px;
`;

const Dots = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  img {
    width: 158px;
    height: 158px;
  }
  .mailWrap {
    width: 630px;
    height: 403px;
  }
`;

export default MailDots;
