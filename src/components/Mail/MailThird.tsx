import styled from 'styled-components';
import MailLayout from './MailLayout';

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
        <Container>Third</Container>
      </MailLayout>
    </>
  );
};

const Container = styled.div``;

export default MailThird;
