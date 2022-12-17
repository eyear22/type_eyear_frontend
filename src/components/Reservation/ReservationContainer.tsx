import styled from 'styled-components';
import ReservationLayout from '../../layout/ReservationLayout';
import ReservationForm from './ReservationForm';

const ReservationContainer = () => {
  return (
    <>
      <ReservationLayout page="reservation">
        <Top>
          <h1>예약 하기</h1>
        </Top>
        <ReservationForm />
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

export default ReservationContainer;
