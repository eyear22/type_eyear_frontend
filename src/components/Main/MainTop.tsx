import styled from 'styled-components';

const MainTop = () => {
  return (
    <>
      <Container>
        <TitleWrap>
          <div>진심을 전하는</div>
          <div>가장 쉬운 방법</div>
        </TitleWrap>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 810px;
  background: #edf6f1;
  padding-top: 110px;
`;

const TitleWrap = styled.section`
  margin-top: 72px;
  width: 100%;
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
    justify-content: center;
  }
`;

export default MainTop;
