import styled from 'styled-components';

const main1_1 = process.env.PUBLIC_URL + '/img/main1_1.png';
const main1_2 = process.env.PUBLIC_URL + '/img/main1_2.png';

const MainMid = () => {
  return (
    <>
      <Container>
        <Section1>
          <Introduce>
            <div className="left">{'요양원 전용 영상 우편 서비스\n아이어를 소개할게요!'}</div>
            <div className="right">01</div>
          </Introduce>
          <div className="imgWrap">
            <img className="main1_1" src={main1_1} alt="" />
            <img className="main1_2" src={main1_2} alt="" />
          </div>
        </Section1>
        <Section2>Main2</Section2>
        <Section3>Main3</Section3>
      </Container>
    </>
  );
};

const Container = styled.section`
  background: #51cd89;
  height: auto;
  padding-top: 131px;
  padding-bottom: 211px;
`;

const Section1 = styled.section`
  width: 1322px;
  margin: 0 auto;
  .imgWrap {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
  }

  .main1_1 {
    margin-top: 24px;
    width: 527.2px;
    height: 428px;
  }
  .main1_2 {
    margin-top: 2px;
    width: 726.57px;
    height: 470px;
    object-fit: cover;
  }
`;

const Introduce = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: pre-wrap;
  .left {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 28.264px;
    line-height: 34px;
    letter-spacing: 0.184658px;
    color: #ffffff;
  }
  .right {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 28.264px;
    line-height: 34px;
    display: flex;
    align-items: center;
    letter-spacing: 0.184658px;
    color: #ffffff;
  }
`;

const Section2 = styled.section`
  margin-top: 261.75px;
`;

const Section3 = styled.section`
  margin-top: 230.29px;
`;

export default MainMid;
