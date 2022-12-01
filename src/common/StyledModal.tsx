import styled from 'styled-components';
const CloseIcon = process.env.PUBLIC_URL + '/img/Close_XL.png';

type ModalType = {
  open: number;
  setOpen: (v: boolean) => void;
  children: number;
};

const StyledModal: React.FC<ModalType> = ({ open, setOpen, children }) => {
  const close = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Wrap>
        <CloseButton src={CloseIcon} alt="" onClick={close} />
        <Content>{children}</Content>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Wrap = styled.div`
  position: absolute;
  width: 300px;
  height: 500px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const CloseButton = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
`;

const Content = styled.div`
  display: flex;
  margin-top: 20px;
`;

export default StyledModal;
