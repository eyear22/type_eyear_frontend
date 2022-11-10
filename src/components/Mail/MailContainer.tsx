import styled from 'styled-components';
import MailDots from './MailDots';

const MailContainer = () => {
  return (
    <>
      <Container>
        <Wrap>
          <MailDots />
        </Wrap>
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  margin-top: 92px;
  height: 51.3vh;
  background: #f1f5ff;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(112px);
  margin: 0 auto;
`;

export default MailContainer;
