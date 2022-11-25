import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Register } from '../../redux/auth';

const RegisterContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch<any>();
  const RegisterBtn = () => {
    dispatch(Register(email, password, name, phone));
  };

  return (
    <Container>
      <h1>회원가입</h1>
      <input placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="010-0000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={RegisterBtn}>회원가입</button>
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

export default RegisterContainer;
