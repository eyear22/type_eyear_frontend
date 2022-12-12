import styled from 'styled-components';
import MainBanner from './MainBanner';

const HomeContainer = () => {
  return (
    <Container>
      <MainBanner />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 92px;
`;

export default HomeContainer;
