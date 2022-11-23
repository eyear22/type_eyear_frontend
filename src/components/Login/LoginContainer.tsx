import styled from 'styled-components';

const LoginContainer = () => {
  return (
    <Container>
      <h1>로그인</h1>
      <input placeholder="이메일" />
      <input placeholder="비밀번호" />
      <button>로그인</button>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 92px;
  input {
    margin-bottom: 10px;
  }
  button {
    width: 100px;
  }
`;

export default LoginContainer;
