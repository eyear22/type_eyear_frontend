import { useRef, useState } from 'react';
import styled from 'styled-components';
import MailLayout from './MailLayout';
const Mail1 = process.env.PUBLIC_URL + '/img/mail1.png';
const UploadIcon = process.env.PUBLIC_URL + '/img/mail_upload.png';
const SendIcon = process.env.PUBLIC_URL + '/img/send.png';

type MailThirdType = {
  stage: number;
  setStage: (v: number) => void;
};

const MailThird: React.FC<MailThirdType> = ({ stage, setStage }) => {
  const [video, setVideo] = useState<Array<File>>([]);
  const progressRef = useRef<HTMLProgressElement>(null);

  // 파일 처리 input
  const onInputFile = (e: any) => {
    e.preventDefault();
    if (e.target.files[0].name.split('.').slice(-1)[0] === 'mp4') {
      setVideo(e.target.files);
    } else alert('mp4형식의 동영상 파일만 업로드 가능합니다.');
  };
  // 파일 처리 ondrop
  const onDropFiles = (e: any) => {
    e.preventDefault();
    console.log(e.dataTransfer.files[0].name.split('.').slice(-1));
    if (e.dataTransfer.files[0].name.split('.').slice(-1)[0] === 'mp4') {
      setVideo(e.dataTransfer.files);
    } else alert('mp4형식의 동영상 파일만 업로드 가능합니다.');
  };
  const dragOver = (e: any) => {
    e.preventDefault();
  };

  // 전송 버튼
  const onClickSend = () => {
    if (confirm('영상 우편을 전송하시겠습니까?')) {
      setStage(3);
    }
  };

  return (
    <>
      <MailLayout
        stage={stage}
        setStage={setStage}
        rightArrow={false}
        title={'마음이 담긴' + '\n' + '영상을 업로드해주세요.'}
        desc="*mp4형식의 동영상 파일만 업로드 가능해요."
      >
        <Wrap>
          <img src={Mail1} alt="" />
          <div className="receiver">홍길동</div>
          {video.length === 0 ? (
            <div className="dragWrap" onDragOver={dragOver} onDrop={onDropFiles} onChange={onInputFile}>
              <img src={UploadIcon} alt="" />
              <p>파일을 선택하거나 영역에 끌어다 놓아주세요.</p>
              <input id="input_file" type="file" />
              <label htmlFor="input_file">파일 선택</label>
            </div>
          ) : (
            <div className="uploadWrap">
              <span>{video[0].name}</span>
              <div className="progressWrap">
                <label>
                  <progress ref={progressRef} value="100" max="100" />
                  {video[0].size}
                </label>
                <button>자막 생성 완료</button>
              </div>
            </div>
          )}
        </Wrap>
      </MailLayout>
      {video.length !== 0 && <SendButton src={SendIcon} alt="" onClick={onClickSend} />}
    </>
  );
};
const Wrap = styled.div`
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
  }
  .dragWrap {
    position: absolute;
    z-index: 2;
    left: 195px;
    bottom: 50px;
    background: rgba(255, 255, 255, 0.74);
    border: 1px dashed rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(5px);
    width: 550px;
    height: 249px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 48px;
      height: 48px;
    }
    p {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 120%;
      color: #565656;
    }
    input {
      display: none;
    }
    label {
      width: 77px;
      height: 28px;
      background-color: #0049fb;
      border: 1px solid #0049fb;
      border-radius: 5px;
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 120%;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
  .uploadWrap {
    position: absolute;
    left: 195px;
    bottom: 50px;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    width: 558px;
    height: 112px;
    display: flex;
    flex-direction: column;
    span {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 120%;
      color: #000000;
      margin: 16px 0 16px 20px;
    }
    .progressWrap {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding: 16px;
      label {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        color: rgba(0, 0, 0, 0.7);
        progress {
          width: 124px;
          margin-right: 8px;
        }
      }
      button {
        width: 147px;
        height: 35px;
        background: #0049fb;
        border-radius: 8px;
        border: none;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        align-items: center;
        text-align: center;
        color: #ffffff;
      }
    }
  }
`;

const SendButton = styled.img`
  width: 69px;
  height: 69px;
  margin-top: 20px;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export default MailThird;
