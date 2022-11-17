import { Link } from 'react-router-dom';
import styled from 'styled-components';

const logo = process.env.PUBLIC_URL + '/img/logo.png';
const person = process.env.PUBLIC_URL + '/img/person-frame.png';
const arrow = process.env.PUBLIC_URL + '/img/arrow.png';

const Header = () => {
  const user = ['박세희'];
  return (
    <>
      <Container>
        <Logo src={logo} alt="" />
        <Menu>
          <li>서비스 소개</li>
          <li>
            <StyledLink to="/mail">우편 서비스</StyledLink>
          </li>
          <li>예약 서비스</li>
        </Menu>
        <UserWrap>
          {user.length === 0 ? (
            <>
              <span>로그인</span>
              <span>문의하기</span>
            </>
          ) : (
            <>
              <img src={person} alt="" />
              <span>{user[0] + '님'}</span>
            </>
          )}
          <button>
            병원 서비스
            <img src={arrow} alt="" />
          </button>
        </UserWrap>
      </Container>
    </>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #ffffff;
  z-index: 100;
  width: 100%;
  height: 92px;
`;

const Logo = styled.img`
  width: 86px;
  height: 26px;
  object-fit: contain;
  margin-left: 134px;
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  line-height: 120%;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;

  li:first-child {
    margin-left: 77px;
  }
  li {
    padding: 37px 0;
    margin-left: 33px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    text-align: center;
    color: #0049fb;

    :hover {
      cursor: pointer;
      border-bottom: 3px solid #0049fb;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const UserWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 134px;
  img {
    width: 18px;
    height: 18px;
    cursor: pointer;
    margin-right: 4px;
  }
  span {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #0049fb;
    margin-right: 32.5px;
  }
  button {
    width: 124px;
    height: 36px;
    background: #0049fb;
    border-radius: 20px;
    border: none;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    color: #ffffff;
    cursor: pointer;
    img {
      margin-left: 13px;
      width: 5px;
      height: 10px;
    }
  }
`;

export default Header;
