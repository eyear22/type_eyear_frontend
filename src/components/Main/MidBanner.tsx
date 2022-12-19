/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
const Icon1 = process.env.PUBLIC_URL + '/img/icon_introduce1.png';
const Icon2 = process.env.PUBLIC_URL + '/img/icon_introduce2.png';
const Icon3 = process.env.PUBLIC_URL + '/img/icon_introduce3.png';
const Icon4 = process.env.PUBLIC_URL + '/img/icon_introduce4.png';

const items = [
  {
    key: 0,
    img: Icon1,
    title: '아이어',
    subTitle: '영상을 주고받으며 ' + '\n' + ' 소통할 수 있는 플랫폼 서비스',
  },
  {
    key: 1,
    img: Icon2,
    title: '베리어프리 서비스',
    subTitle: '소통의 어려움을 해결하기 위해 ' + '\n' + '영상 자동 자막 생성 기능 제작',
  },
  {
    key: 2,
    img: Icon3,
    title: '사용 방법',
    subTitle: '우편 서비스를 통해 영상 전송 ' + '\n' + '보낸 우편함을 통해 확인',
  },
  {
    key: 3,
    img: Icon4,
    title: '인증된 병원',
    subTitle: '보건의료빅데이터개방시스템을 통해 ' + '\n' + '요양병원 인증 절차 진행',
  },
];

const MidBanner = () => {
  return (
    <>
      <Container>
        <Wrap>
          {items.map(({ key, img, title, subTitle }) => (
            <Box key={key}>
              <Image src={img} />
              <Title>{title}</Title>
              <SubTitle>{subTitle}</SubTitle>
            </Box>
          ))}
        </Wrap>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  padding-left: 108px;
  background-color: #f9f9f9;
`;
const Wrap = styled.div`
  position: relative;
  display: flex;
  transform: translateY(-100px);
`;

const Box = styled.div`
  width: 326px;
  height: 261px;
  border-radius: 13px;
  background-color: #fff;
  margin-right: 80px;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

const Image = styled.img`
  width: 120px;
`;

const Title = styled.div`
  margin: 20px 0;
  font-weight: bold;
  font-size: 20px;
`;

const SubTitle = styled.div`
  color: #5c5c5c;
  text-align: center;
  white-space: pre;
`;

export default MidBanner;
