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
  background-color: #f2f5fe;
`;

const Wrap = styled.div`
  transform: translateY(112px);
  width: 60%;
  margin: 0 auto;
`;

export default MailContainer;
