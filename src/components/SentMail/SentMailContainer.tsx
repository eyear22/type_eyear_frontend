import styled from 'styled-components';
import MyPageLayout from '../../layout/MyPageLayout';

const SentMailContainer = () => {
  return (
    <>
      <MyPageLayout page="sentMail">
        <Top>
          <h1>보낸 편지함</h1>
          <div>드롭다운</div>
        </Top>
        <div>SentMailContainer</div>
        <div>SentMailContainer</div>
        <div>SentMailContainer</div>
        <div>SentMailContainer</div>
        <div>SentMailContainer</div>
        <div>SentMailContainer</div>
        <div>SentMailContainer</div>
      </MyPageLayout>
    </>
  );
};

const Top = styled.div`
  display: flex;
  width: 100%;
  background-color: aliceblue;
  margin-bottom: 29px;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: #000000;
  }
`;

export default SentMailContainer;
