import styled from 'styled-components';
import MainBanner from './MainBanner';
import MidBanner from './MidBanner';

const HomeContainer = () => {
  return (
    <Container>
      <MainBanner />
      <MidBanner />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 92px;
`;

export default HomeContainer;
