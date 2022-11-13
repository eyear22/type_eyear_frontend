import Slider from 'react-slick';
import styled from 'styled-components';
import MailLayout from './MailLayout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const MailBasic = process.env.PUBLIC_URL + '/img/mailBasic.png';
const Mail1 = process.env.PUBLIC_URL + '/img/mail1.png';
const Mail2 = process.env.PUBLIC_URL + '/img/mail2.png';

type MailSecondType = {
  stage: number;
  setStage: (v: number) => void;
};

const MailSecond: React.FC<MailSecondType> = ({ stage, setStage }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: '10px',
  };
  return (
    <>
      <MailLayout
        stage={stage}
        setStage={setStage}
        title={'어떤 카드에' + '\n' + '당신의 진심을 담을까요?'}
        desc="*마우스로 당신만의 카드를 골라주세요."
      >
        <Wrap>
          <CustomSlider {...settings}>
            <img src={MailBasic} alt="" />
            <img src={Mail1} alt="" />
            <img src={Mail2} alt="" />
          </CustomSlider>
          <div className="receiver">홍길동</div>
          <div className="date">2022.11.01</div>
          <div className="send">박세희 드림</div>
          <div className="card">EYEAR</div>
        </Wrap>
      </MailLayout>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  .receiver {
    position: absolute;
    left: 195px;
    top: 50px;
    width: 158px;
    height: 38px;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #1c1c1c;
  }
  .date {
    position: absolute;
    left: 195px;
    bottom: 50px;
    width: 95px;
    height: 36px;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #1c1c1c;
  }
  .send {
    position: absolute;
    right: 195px;
    bottom: 50px;
    width: 93px;
    height: 36px;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #1c1c1c;
  }
  .card {
    position: absolute;
    right: 195px;
    top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 93px;
    height: 124px;
    background: #f1f5ff;
    border-radius: 8px;
    font-family: 'Krona One';
    font-style: normal;
    font-weight: 400;
    font-size: 10.1538px;
    line-height: 120%;
    color: #0049fb;
  }
`;

const CustomSlider = styled(Slider)`
  width: 630px;
  height: 403px;
  .slick-slide {
    width: 630px;
    height: 403px;
    box-sizing: border-box;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
  }
`;

export default MailSecond;
