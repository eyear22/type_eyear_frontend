/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Login, Test } from '../../redux/auth';
import { getCookie, setCookie } from '../../util/cookie';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import api from '../../api/client';

const LoginContainer = () => {
  const [email, setEmail] = useState('test1125@gmail.com');
  const [password, setPassword] = useState('Qwer1234!');
  const auth = useSelector((state: any) => state.auth.data);

  const testData = useSelector((state: any) => state.auth.data);

  const dispatch = useDispatch<any>();
  const LoginBtn = () => {
    dispatch(Login(email, password));
    if (auth.message === 'success') {
      setCookie('access_token', auth.tokens.access_token);
      setCookie('refresh_token', auth.tokens.refresh_token);
    }
  };

  const TestBtn = () => {
    const BASE_URL = 'http://localhost:3333';
    dispatch(Test());
    // api
    //   .get(`${BASE_URL}/auth/test`, {
    //     headers: { Authorization: `Bearer ${getCookie('access_token')}` },
    //   })
    //   .then((res) => console.log(res.data));
  };

  useEffect(() => {
    dispatch(Test());
  }, []);

  return (
    <Container>
      <h1>로그인</h1>
      <input placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={LoginBtn}>로그인</button>
      <button onClick={TestBtn}>테스트</button>
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
