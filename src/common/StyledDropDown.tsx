import { useEffect, useState } from 'react';
import styled from 'styled-components';

export type StyleType = {
  show?: boolean;
  type?: string;
  width?: number;
};

const StyledDropDown = ({ type, width, label, data, current, setCurrent }: any) => {
  const [showOptions, setShowOptions] = useState(true);
  const handleSelect = (e: any) => {
    const { innerText } = e.target;
    const value = e.target.getAttribute('value');
    setCurrent({ value: value, name: innerText });
  };

  useEffect(() => label && setCurrent({ value: label, name: label }), []);

  return (
    <>
      <Container type={type} width={width} onClick={() => setShowOptions((prev) => !prev)}>
        <Label type={type}>{current.name}</Label>
        <List type={type} show={showOptions}>
          {data.map((v: any) => (
            <Item type={type} key={v.value} value={v.value} onClick={handleSelect}>
              {v.name}
            </Item>
          ))}
        </List>
      </Container>
    </>
  );
};

const Container = styled.div<StyleType>`
  z-index: 1;
  position: relative;
  border-radius: 6px;
  align-self: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &::before {
    content: '⌵';
    position: absolute;
    top: ${(props) => (props.type === 'mini' ? '5px' : '10px')};
    right: 1em;
    color: #000;
    font-size: 20px;
  }
  background-color: ${(props) => (props.type === 'mini' ? '#f2f4f6' : '#fff')};
  border: ${(props) => (props.type === 'mini' ? 'none' : '1px solid #dadee2')};
  color: ${(props) => (props.type === 'mini' ? '#404a5c' : '#000')};
  width: ${(props) => (props.width ? props.width + 'px' : '100%')};
  height: ${(props) => (props.type === 'mini' ? '38px' : '48px')};
`;

const Label = styled.div<StyleType>`
  display: flex;
  height: 100%;
  border-radius: 6px;
  align-items: center;
  text-align: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  font-feature-settings: 'tnum' on, 'lnum' on;
  background-color: ${(props) => (props.type === 'mini' ? '#f2f4f6' : '#fff')};
  padding-left: ${(props) => (props.type === 'mini' ? '1em' : '1.8em')};
  color: ${(props) => (props.type === 'mini' ? '#404A5C' : '#000')};
`;

const List = styled.ul<StyleType>`
  position: absolute;
  list-style: none;
  height: 120px;
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  border-radius: 8px;
  max-height: ${(props) => (props.show ? 'none' : '0')};
  display: ${(props) => (props.show ? 'block' : 'none')};
  box-sizing: border-box;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #000000;
  background-color: #fff;
  color: #000;
  border: 1px solid #dadee2;
  top: 48px;
  padding: 0;
`;

const Item = styled.li<StyleType>`
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #e1e1eb;
  }
  background-color: #fff;
  padding: ${(props) => (props.type === 'mini' ? '1em' : '1em 1.8em')};
`;

export default StyledDropDown;
