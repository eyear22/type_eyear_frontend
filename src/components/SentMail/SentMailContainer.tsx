import styled from 'styled-components';
import MyPageLayout from '../../layout/MyPageLayout';
const MAilBasic = process.env.PUBLIC_URL + '/img/MailBasic.png';

const SentMailContainer = () => {
  return (
    <>
      <MyPageLayout page="sentMail">
        <Top>
          <h1>보낸 편지함</h1>
          <div>최신순</div>
        </Top>
        <Content>
          <img src={MAilBasic} alt="" />
          <img src={MAilBasic} alt="" />
          <img src={MAilBasic} alt="" />
          <img src={MAilBasic} alt="" />
          <img src={MAilBasic} alt="" />
          <img src={MAilBasic} alt="" />
        </Content>
      </MyPageLayout>
    </>
  );
};

const Top = styled.div`
  display: flex;
  width: 100%;
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

const Content = styled.div`
  display: inline-block;
  width: 100%;
  img {
    width: 32%;
    height: 183px;
    margin-right: 2%;
    &:nth-child(3n) {
      margin-right: 0px;
    }
    object-fit: cover;
  }
`;

export default SentMailContainer;
