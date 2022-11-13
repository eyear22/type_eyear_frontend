import styled from 'styled-components';

const DotCheck = process.env.PUBLIC_URL + '/img/mailDotCheck.png';
const Dot2 = process.env.PUBLIC_URL + '/img/mailDot2.png';
const Dot3 = process.env.PUBLIC_URL + '/img/mailDot3.png';
const ArrowRight = process.env.PUBLIC_URL + '/img/mailArrowRight.png';
const ArrowLeft = process.env.PUBLIC_URL + '/img/mailArrowLeft.png';

type MailLayoutType = {
  children: React.ReactNode;
  stage: number;
  setStage: (v: number) => void;
  leftArrow?: boolean;
  rightArrow?: boolean;
  title: string;
  desc: string;
};

const MailLayout: React.FC<MailLayoutType> = ({
  children,
  stage,
  setStage,
  leftArrow = true,
  rightArrow = true,
  title,
  desc,
}) => {
  console.log(stage);
  return (
    <>
      <Container>
        <Dots>
          <img src={DotCheck} alt="" />
          <div className="line" />
          <img src={stage < 1 ? Dot2 : DotCheck} alt="" />
          <div className="line" />
          <img src={stage < 2 ? Dot3 : DotCheck} alt="" />
        </Dots>
        <Title>{title}</Title>
      </Container>
      <Content>
        <LeftArrow src={ArrowLeft} alt="" onClick={() => setStage(stage - 1)} left={leftArrow} />
        <div className="center">{children}</div>
        <RightArrow src={ArrowRight} alt="" onClick={() => setStage(stage + 1)} right={rightArrow} />
      </Content>
      <Desc>{desc}</Desc>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 622px;
  margin-bottom: 86px;
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
  .center {
    display: flex;
    background-color: aqua;
    width: 630px;
    height: 403px;
  }
`;

const LeftArrow = styled.img<{ left?: boolean }>`
  width: 158px;
  height: 158px;
  cursor: pointer;
  visibility: ${(props) => (props.left ? 'visible' : 'hidden')};
`;

const RightArrow = styled.img<{ right?: boolean }>`
  width: 158px;
  height: 158px;
  cursor: pointer;
  visibility: ${(props) => (props.right ? 'visible' : 'hidden')};
`;

const Desc = styled.div`
  width: 622px;
  text-align: right;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #a2a2a2;
`;

export default MailLayout;
