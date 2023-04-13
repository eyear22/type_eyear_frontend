import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const logo = process.env.PUBLIC_URL + '/img/eyear_logo.png';
const person = process.env.PUBLIC_URL + '/img/person.png';
const arrow = process.env.PUBLIC_URL + '/img/arrow.png';
const dropdown = process.env.PUBLIC_URL + '/img/dropdown.png';

const Header = () => {
  const user: Array<string> = ['수영'];
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <Container>
        <Logo src={logo} alt="" />
        <Menu>
          <li>서비스 소개</li>
          <li>
            <StyledLink to="/mail">영상 우편 보내기</StyledLink>
          </li>
          <li>
            <StyledLink to="/reservation">면회 예약하기</StyledLink>
          </li>
        </Menu>
        <UserWrap>
          {user.length === 0 ? (
            <>
              <span>
                <StyledLink to="/login">로그인</StyledLink>
              </span>
              <span>문의하기</span>
            </>
          ) : (
            <LoginUserWrap onClick={() => setDropdownOpen(!dropdownOpen)} open={dropdownOpen}>
              <img src={person} alt="" />
              <span>{user[0] + '님'}</span>
              <img src={dropdown} alt="" className="dropdown" />
              {dropdownOpen && (
                <DropDownWrap>
                  <li>
                    <StyledLink to="/sentMail">보낸 우편함</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/reservationList">예약 내역</StyledLink>
                  </li>
                  <li className="logout">로그아웃</li>
                </DropDownWrap>
              )}
            </LoginUserWrap>
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
  margin: 0 auto;
  left: 0;
  right: 0;
  background-color: #ffffff;
  z-index: 2;
  height: 110px;
  max-width: 1322px;
  width: 70%;
  border-radius: 0px 0px 8px 8px;
`;

const Logo = styled.img`
  height: 18px;
  width: 82px;
  object-fit: contain;
  margin-left: 50px;
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
    margin-left: 42px;
  }
  li {
    padding: 44px 10px;
    margin-left: 23px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: #51cd89;

    :hover {
      cursor: pointer;
      border-bottom: 2px solid #51cd89;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
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
  margin-right: 95px;
  span {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #51cd89;
    margin-right: 32.5px;
  }
  button {
    width: 128px;
    height: 38px;
    background: #51cd89;
    border-radius: 20px;
    border: none;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: #ffffff;
    cursor: pointer;
    img {
      margin-left: 14px;
      width: 5px;
      height: 10px;
    }
  }
`;

const LoginUserWrap = styled.div<{ open: boolean }>`
  display: flex;
  cursor: pointer;
  align-items: center;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  img {
    width: 24px;
    height: 24px;
    margin-right: 7px;
  }
  span {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: #51cd89;
    margin-right: 4px;
    &:hover {
      text-decoration: underline;
    }
  }
  .dropdown {
    width: 24px;
    height: 24px;
    margin-right: 24px;
    transform: ${(props) => props.open && 'rotate(180deg)'};
  }
`;

const DropDownWrap = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 16px;
  width: 113px;
  height: 150px;
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  list-style: none;
  li {
    display: flex;
    box-sizing: border-box;
    padding: 10px 8px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    border-radius: 6px;
    color: #51cd89;
    &:hover {
      background: #edf6f1;
    }
  }
  .logout {
    color: #bbbbbb;
    margin-top: 13px;
    &:hover {
      background: none;
      text-decoration-line: underline;
      color: #454545;
    }
  }
`;

export default Header;
