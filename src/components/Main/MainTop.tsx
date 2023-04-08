import styled from 'styled-components';

const logo = process.env.PUBLIC_URL + '/img/eyear_logo.png';
const main = process.env.PUBLIC_URL + '/img/main.png';

const MainTop = () => {
  return (
    <>
      <Container>
        <TitleWrap>
          <div>진심을 전하기</div>
          <div>가장 쉬운 방법</div>
          <img src={logo} alt="" />
        </TitleWrap>
        <MainImgWrap>
          <img src={main} alt="" />
        </MainImgWrap>
      </Container>
    </>
  );
};

const Container = styled.section`
  height: auto;
  background: #edf6f1;
  padding-top: 110px;
  padding-bottom: 109.32px;
`;

const TitleWrap = styled.div`
  margin-top: 72px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -1px;
  color: #51cd89;
  div {
    display: flex;
    width: 130px;
  }
  img {
    margin-top: 16px;
    height: 16.6px;
    width: 75.9px;
  }
`;

const MainImgWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 82px;
  img {
    height: 340px;
    width: 715px;
    object-fit: cover;
  }
`;

export default MainTop;
