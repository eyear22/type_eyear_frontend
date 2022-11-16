import styled from 'styled-components';
import MailLayout from './MailLayout';
const MailBasic = process.env.PUBLIC_URL + '/img/mailBasic.png';

type MailFirstType = {
  stage: number;
  setStage: (v: number) => void;
  date: string;
};

const MailFirst: React.FC<MailFirstType> = ({ stage, setStage, date }) => {
  return (
    <>
      <MailLayout
        stage={stage}
        setStage={setStage}
        leftArrow={false}
        title={'홍길동님께' + '\n' + '편지를 보내볼까요?'}
        desc="*등록된 가족은 마이페이지에서 등록 및 수정이 가능해요."
      >
        <Wrap>
          <img src={MailBasic} alt="" />
          <div className="receiver">
            홍길동
            <span>8</span>
          </div>
          <div className="date">{date}</div>
          <div className="send">박세희 드림</div>
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
    span {
      margin-left: auto;
      background: #d8d8d8;
      border-radius: 3px;
      padding: 4px 8px;
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 120%;
    }
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
`;

export default MailFirst;
