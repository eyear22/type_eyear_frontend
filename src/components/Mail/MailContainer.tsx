import { useState } from 'react';
import styled from 'styled-components';
import MailDone from './MailDone';
import MailFirst from './MailFirst';
import MailSecond from './MailSecond';
import MailThird from './MailThird';

const MailContainer = () => {
  const [stage, setStage] = useState(0);
  const stageList = [
    <MailFirst stage={stage} setStage={setStage} />,
    <MailSecond stage={stage} setStage={setStage} />,
    <MailThird stage={stage} setStage={setStage} />,
    <MailDone stage={stage} setStage={setStage} />,
  ];
  return (
    <>
      <Container>
        <Wrap>{stageList[stage]}</Wrap>
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  margin-top: 92px;
  height: 468px;
  background: #f1f5ff;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(112px);
  margin: 0 auto;
`;

export default MailContainer;
