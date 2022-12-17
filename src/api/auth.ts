import { getCookie } from '../util/cookie';
import api from './client';

const BASE_URL = 'http://localhost:3333';

export const LoginAPI = (email: string, password: string) =>
  api.post(`${BASE_URL}/auth/login`, {
    email: email,
    password: password,
  });

export const TestAPI = () =>
  api.get(`${BASE_URL}/auth/test`, {
    headers: { Authorization: `Bearer ${getCookie('access_token')}` },
  });

export const RegisterAPI = (email: string, password: string, name: string, phoneNumber: string) =>
  api.post(`${BASE_URL}/user`, {
    email: email,
    password: password,
    name: name,
    phoneNumber: phoneNumber,
  });
