import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

export const LoginAPI = (email: string, password: string) =>
  axios.post(`${BASE_URL}/auth/login`, {
    email: email,
    password: password,
  });

export const RegisterAPI = (email: string, password: string, name: string, phoneNumber: string) =>
  axios.post(`${BASE_URL}/user`, {
    email: email,
    password: password,
    name: name,
    phoneNumber: phoneNumber,
  });
