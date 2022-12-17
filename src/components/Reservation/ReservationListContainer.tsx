import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ReservationLayout from '../../layout/ReservationLayout';
import { GetSendMailList } from '../../redux/mail';

const ReservationListContainer = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(GetSendMailList());
  }, []);

  return (
    <>
      <ReservationLayout page="reservationList">
        <Top>
          <h1>보낸 편지함</h1>
          <div>최신순</div>
        </Top>
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
