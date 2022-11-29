/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const MAilBasic = process.env.PUBLIC_URL + '/img/mailBasic.png';
const Mail1 = process.env.PUBLIC_URL + '/img/mail1.png';
const Mail2 = process.env.PUBLIC_URL + '/img/mail2.png';
const Mail3 = process.env.PUBLIC_URL + '/img/mail3.png';
const Mail4 = process.env.PUBLIC_URL + '/img/mail4.png';
const Mail5 = process.env.PUBLIC_URL + '/img/mail5.png';

const SentMailList = () => {
  const mailList = useSelector((state: any) => state.mail.data);
  console.log(mailList);

  const getCardNumber = (id: number) => 'Mail' + id.toString();

  return (
    <Container>
      {mailList && mailList.posts.length < 1 ? (
        <>
          <div>보낸 편지가 없습니다.</div>
        </>
      ) : (
        <>
          {mailList &&
            mailList.posts.map((item: any, index: number) => (
              <div key={index}>
                <div>{item.post_cardNumber}</div>
                <img src={getCardNumber(item.post_cardNumber)} alt="" />
              </div>
            ))}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
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

export default SentMailList;
