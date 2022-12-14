import styled from 'styled-components';
const Background = process.env.PUBLIC_URL + '/img/img_background.jpg';

const MidBanner = () => {
  return (
    <>
      <Container>
        <Image src={Background} alt="" />
        <TextDiv>
          <Title>"아이어"</Title>
          <SubTitle>
            아이어는 요양병원을 이용하는 노인과 가족들간의 면회 상황에서 노인들이 겪는 불편함을 발견하면서 시작됐습니다.
          </SubTitle>
        </TextDiv>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 490px;
  object-fit: cover;
  opacity: 0.7;
`;

const TextDiv = styled.div`
  position: absolute;
  top: 80px;
  right: 250px;
  width: 500px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
`;

export default MidBanner;
