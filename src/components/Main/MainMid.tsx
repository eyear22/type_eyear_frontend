import styled from 'styled-components';

const main1_1 = process.env.PUBLIC_URL + '/img/main1_1.png';
const main1_2 = process.env.PUBLIC_URL + '/img/main1_2.png';
const main2_1 = process.env.PUBLIC_URL + '/img/main2_1.png';
const main2_2 = process.env.PUBLIC_URL + '/img/main2_2.png';
const main2_3 = process.env.PUBLIC_URL + '/img/main2_3.png';
const pointer = process.env.PUBLIC_URL + '/img/pointer.png';

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
        <Section2>
          <img className="main2_1" src={main2_1} alt="" />
          <div className="imgWrap">
            <img className="main2_2" src={main2_2} alt="" />
            <img className="main2_3" src={main2_3} alt="" />
            <div className="num">02</div>
            <img className="pointer" src={pointer} alt="" />
            <button>대면 면회 예약하기</button>
          </div>
        </Section2>
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
  width: 1322px;
  margin: 0 auto;
  margin-top: 261.75px;
  .imgWrap {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .main2_1 {
    margin-left: 200px;
    width: 412.95px;
    height: 100.66px;
    object-fit: cover;
  }
  .main2_2 {
    margin-top: 10px;
    width: 483.15px;
    height: 500.41px;
    object-fit: cover;
    transform: translateX(-40px);
  }
  .main2_3 {
    width: 521.84px;
    height: 411.02px;
    transform: translateY(-50px);
  }
  .num {
    position: absolute;
    top: -100px;
    right: 0;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 27.9766px;
    line-height: 34px;
    letter-spacing: 0.182781px;
    color: #ffffff;
  }
  button {
    left: 446px;
    bottom: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10.2322px 20px;
    gap: 20.46px;
    position: absolute;
    width: 150px;
    height: 47px;
    background: #51cd89;
    border: 1.02322px solid #ffffff;
    box-shadow: 0px 8.18576px 55.2539px rgba(0, 0, 0, 0.18);
    border-radius: 30.6966px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 31px;
    text-align: center;
    color: #ffffff;
  }
  .pointer {
    position: absolute;
    width: 49.11px;
    height: 49.11px;
    left: 610px;
    bottom: 108px;
  }
`;

const Section3 = styled.section`
  margin-top: 230.29px;
`;

export default MainMid;
