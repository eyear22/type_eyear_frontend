import styled from 'styled-components';
import MailLayout from './MailLayout';
const MailEnvelope = process.env.PUBLIC_URL + '/img/envelope.png';

type MailDoneType = {
  stage: number;
  setStage: (v: number) => void;
  mailIndex: number;
};

const MailDone: React.FC<MailDoneType> = ({ stage, setStage, mailIndex }) => {
  return (
    <>
      <MailLayout
        stage={stage}
        setStage={setStage}
        rightArrow={false}
        leftArrow={false}
        title={'마음이 담긴' + '\n' + '영상을 업로드해주세요.'}
        desc=""
      >
        <Wrap>
          <img src={MailEnvelope} alt="" />
          <div className="desc">보낸 편지는 30분 뒤 보낸 우편함에서 확인 가능합니다.</div>
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
  .desc {
    position: absolute;
    left: 34.5%;
    bottom: 50px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
`;

export default MailDone;
