import { useState } from 'react';
import styled from 'styled-components';
import MailDone from './MailDone';
import MailFirst from './MailFirst';
import MailSecond from './MailSecond';
import MailThird from './MailThird';

const MailContainer = () => {
  const [stage, setStage] = useState(0);
  const [mailIndex, setMailIndex] = useState(0);

  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const dateStr = year + '.' + month + '.' + day;

  const stageList = [
    <MailFirst stage={stage} setStage={setStage} date={dateStr} />,
    <MailSecond stage={stage} setStage={setStage} setMailIndex={setMailIndex} date={dateStr} />,
    <MailThird stage={stage} setStage={setStage} mailIndex={mailIndex} />,
    <MailDone stage={stage} setStage={setStage} mailIndex={mailIndex} />,
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
