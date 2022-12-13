import styled from 'styled-components';
import BottomBanner from './BottomBanner';
import MainBanner from './MainBanner';
import MidBanner from './MidBanner';

const HomeContainer = () => {
  return (
    <Container>
      <MainBanner />
      <MidBanner />
      <BottomBanner />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 92px;
`;

export default HomeContainer;
