import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ReservationLayout from '../../layout/ReservationLayout';
import { GetReservation } from '../../redux/reservation';
import ReservationList from './ReservationList';

const ReservationListContainer = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(GetReservation());
  }, []);

  return (
    <>
      <ReservationLayout page="reservationList">
        <Top>
          <h1>예약 내역</h1>
        </Top>
        <ReservationList />
      </ReservationLayout>
    </>
  );
};

const Top = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 29px;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: #000000;
  }
`;

export default ReservationListContainer;
