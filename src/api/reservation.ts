import api from './client';
import { getCookie } from '../util/cookie';

const BASE_URL = 'http://localhost:3333';

// 예약 등록
export const postReservationAPI = (reservationDate: string, timetableIndex: number, faceToface: boolean) =>
  api.post(
    `${BASE_URL}/reservation`,
    { reservationDate: reservationDate, timetableIndex: Number(timetableIndex), faceToface: faceToface },
    {
      headers: { Authorization: `Bearer ${getCookie('access_token')}` },
    }
  );

// 예약 리스트
export const getReservationAPI = () =>
  api.get(`${BASE_URL}/reservation`, {
    headers: { Authorization: `Bearer ${getCookie('access_token')}` },
  });
