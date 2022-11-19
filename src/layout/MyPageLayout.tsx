import styled from 'styled-components';
const ArrowBlack = process.env.PUBLIC_URL + '/img/mypage_arrow_black.png';

type MyPageLayoutType = {
  children: React.ReactNode;
};

const MyPageLayout: React.FC<MyPageLayoutType> = ({ children }) => {
  return (
    <>
      <Banner>
        <div className="title">{'안녕하세요.\n박세희 보호자님!'}</div>
      </Banner>
      <Container>
        <SideMenu>
          <li>
            보낸 편지함
            <img src={ArrowBlack} alt="" />
          </li>
          <li>
            수신인 관리
            <img src={ArrowBlack} alt="" />
          </li>
          <li>
            예약 내역
            <img src={ArrowBlack} alt="" />
          </li>
          <li>
            계정 관리
            <img src={ArrowBlack} alt="" />
          </li>
        </SideMenu>
        <Content>{children}</Content>
      </Container>
    </>
  );
};

const Banner = styled.div`
  display: flex;
  height: 310px;
  background: #f1f5ff;
  .title {
    margin-top: 231px;
    margin-left: 333px;
    white-space: pre;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: #000000;
  }
`;

const Container = styled.div`
  display: flex;
  width: 67%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 22px;
`;

const SideMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  margin-right: 48px;
  width: 264px;
  list-style: none;
  li {
    width: 100%;
    background: #f1f5ff;
    border-radius: 8px;
    height: 56px;
    padding: 16px 24px;
    box-sizing: border-box;
    margin-bottom: 16px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: #000000;
    display: flex;
    img {
      width: 24px;
      height: 24px;
      margin-left: auto;
    }
  }
`;

const Content = styled.div``;

export default MyPageLayout;
