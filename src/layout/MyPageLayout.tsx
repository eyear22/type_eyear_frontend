import { Link } from 'react-router-dom';
import styled from 'styled-components';
const ArrowBlack = process.env.PUBLIC_URL + '/img/mypage_arrow_black.png';
const ArrowWhite = process.env.PUBLIC_URL + '/img/mypage_arrow_white.png';

type MyPageLayoutType = {
  children: React.ReactNode;
  page: string;
};

const MyPageLayout: React.FC<MyPageLayoutType> = ({ children, page }) => {
  return (
    <>
      <Banner>
        <div className="title">{'안녕하세요.\n박세희 보호자님!'}</div>
      </Banner>
      <Container>
        <SideMenu>
          <MenuItem select={page === 'sentMail'}>
            <StyledLink to="/sentMail">보낸 편지함</StyledLink>
          </MenuItem>
          <MenuItem select={page === 'a'}>수신인 관리</MenuItem>
          <MenuItem select={page === 'b'}>예약 내역</MenuItem>
          <MenuItem select={page === 'c'}>계정 관리</MenuItem>
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
`;

const MenuItem = styled.li<{ select: boolean }>`
  width: 100%;
  background-color: ${(props) => (props.select ? '#0049FB' : '#f1f5ff')};
  color: ${(props) => (props.select ? '#ffffff' : '#000000')};
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
  display: flex;
  cursor: pointer;
  background-image: url(${(props) => (props.select ? ArrowWhite : ArrowBlack)});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 216px center;
  &:hover {
    background-color: #0049fb;
    color: #f1f5ff;
    background-image: url('/type_eyear_frontend/img/mypage_arrow_white.png');
  }
`;

const Content = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  width: 100%;
`;

export default MyPageLayout;
