import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import MyPageLayout from '../../layout/MyPageLayout';
import { GetSendMailList } from '../../redux/mail';
import MailDetailModal from '../MailDetail/MailDetailModal';
import SentMailList from './SentMailList';

const SentMailContainer = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(GetSendMailList());
  }, []);

  return (
    <>
      <MyPageLayout page="sentMail">
        <Top>
          <h1>보낸 편지함</h1>
          <div>최신순</div>
        </Top>
        <SentMailList open={open} setOpen={setOpen} />
      </MyPageLayout>
      {open && <MailDetailModal open={open} setOpen={setOpen} />}
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

export default SentMailContainer;
