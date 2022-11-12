import styled from 'styled-components';
import MailLayout from './MailLayout';
const Mail1 = process.env.PUBLIC_URL + '/img/mail1.png';

type MailThirdType = {
  stage: number;
  setStage: (v: number) => void;
};

const MailThird: React.FC<MailThirdType> = ({ stage, setStage }) => {
  return (
    <>
      <MailLayout
        stage={stage}
        setStage={setStage}
        rightArrow={false}
        title={'홍길동님께' + '\n' + '편지를 보내볼까요?'}
        desc="*mp4형식의 동영상 파일만 업로드 가능해요."
      >
        <Wrap>
          <img src={Mail1} alt="" />
          <div className="receiver">홍길동</div>
        </Wrap>
      </MailLayout>
    </>
  );
};
const Wrap = styled.div`
  display: flex;
  img {
    width: 630px;
    height: 403px;
    object-fit: cover;
  }
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
`;

export default MailThird;
