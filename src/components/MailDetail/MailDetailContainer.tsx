import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { GetMailDetail } from '../../redux/mail';

const MailDetailContainer = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(GetMailDetail(1));
  }, []);
  return (
    <Container>
      <div>MailDetailContainer</div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 92px;
`;

export default MailDetailContainer;
