import styled from 'styled-components';
import MainBanner from './MainBanner';
import MidBanner from './MidBanner';
import MainTop from './MainTop';

const HomeContainer = () => {
  return (
    <Container>
      <MainTop />
      <MainBanner />
      <MidBanner />
    </Container>
  );
};

const Container = styled.div``;

export default HomeContainer;
