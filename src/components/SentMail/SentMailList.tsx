/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from 'react-redux';
import styled from 'styled-components';

type sentMailListType = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const SentMailList: React.FC<sentMailListType> = ({ open, setOpen }) => {
  const mailList = useSelector((state: any) => state.mail.data);

  return (
    <Container>
      {mailList && mailList.posts.length < 1 ? (
        <>
          <div>보낸 편지가 없습니다.</div>
        </>
      ) : (
        <>
          <Content>
            {mailList &&
              mailList.posts.map((item: any, index: number) => (
                <div className="item" key={index} onClick={() => setOpen(true)}>
                  <img src={`img/mail${item.post_cardNumber}.png`} alt="" />
                </div>
              ))}
          </Content>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  .item {
    display: inline-block;
    cursor: pointer;
    width: 32%;
    margin-right: 2%;
    margin-bottom: 29px;
    &:nth-child(3n) {
      margin-right: 0px;
    }
    img {
      height: 183px;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export default SentMailList;
