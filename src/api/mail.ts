import api from './client';

const BASE_URL = 'http://localhost:3333';

export const getMailAPI = () => api.get(`${BASE_URL}/user/posts`);

export const getMailDetailAPI = (id: number) => api.get(`${BASE_URL}/post/detail/${id}`);
