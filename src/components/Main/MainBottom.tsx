import styled from 'styled-components';

const img = process.env.PUBLIC_URL + '/img/main_bottom.png';

const MainBottom = () => {
  return (
    <>
      <Container>
        <Box>
          <div className="box1">환자관리</div>
          <div className="box2">
            등록은 <span className="s1">빠르게,</span> <br />
            관리는 <span className="s2">쉽게,</span> <br />
            부담은 <span className="s3">적게,</span> <br />
          </div>
          <div className="box3">
            번거로운 서비스 도입, <br />
            <span>기존 병원 erm과 유사한 관리 시스템</span>으로 <br />
            서비스 도입을 한결 빠르게.
          </div>
        </Box>
        <Image src={img} alt="" />
      </Container>
    </>
  );
};

const Container = styled.section`
  width: 1322px;
  margin: 0 auto;
  padding-top: 141px;
  padding-bottom: 405.85px;
`;

const Box = styled.div`
  display: flex;
  background: #51cd89;
  border-radius: 13.1501px;
  height: 179.25px;
  padding-top: 37.81px;
  padding-left: 43.56px;
  box-sizing: border-box;
  font-family: 'Pretendard';
  font-style: normal;
  color: #ffffff;
  .box1 {
    width: 190.68px;
    font-weight: 700;
    font-size: 24.6565px;
    line-height: 134%;
  }
  .box2 {
    width: 508.43px;
    font-weight: 700;
    font-size: 24.6565px;
    line-height: 134%;
    .s2 {
      color: #ffffff99;
    }
    .s3 {
      color: #ffffff33;
    }
  }
  .box3 {
    width: 430px;
    font-weight: 400;
    font-size: 24.6565px;
    line-height: 134%;
    span {
      font-weight: 600;
    }
  }
`;

const Image = styled.img`
  margin-top: 76.01px;
  width: 100%;
`;

export default MainBottom;
