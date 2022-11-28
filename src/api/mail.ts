import api from './client';

const BASE_URL = 'http://localhost:3333';

export const getMailAPI = () => api.get(`${BASE_URL}/user/posts`);
