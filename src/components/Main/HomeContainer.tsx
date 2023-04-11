import styled from 'styled-components';
import MainTop from './MainTop';
import MainMid from './MainMid';
import MainBottom from './MainBottom';

const HomeContainer = () => {
  return (
    <Container>
      <MainTop />
      <MainMid />
      <MainBottom />
    </Container>
  );
};

const Container = styled.div``;

export default HomeContainer;
