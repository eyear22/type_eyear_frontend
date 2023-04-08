import styled from 'styled-components';
import MainBanner from './MainBanner';
import MidBanner from './MidBanner';
import MainTop from './MainTop';
import MainMid from './MainMid';

const HomeContainer = () => {
  return (
    <Container>
      <MainTop />
      <MainMid />
      <MainBanner />
      <MidBanner />
    </Container>
  );
};

const Container = styled.div``;

export default HomeContainer;
