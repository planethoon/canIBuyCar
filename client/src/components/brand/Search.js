import styled from "styled-components";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setBrand } from "../../modules/brand";

const Wrapper = styled.div`
  width: 80%;
  position: relative;
`;
const InputContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const DropdownContainer = styled.ul`
  width: 100%;
  background-color: #fafafa;
  display: block;
  position: absolute;
  > li {
    text-align: center;
    font-size: 0.9rem;
    &.focused {
      background-color: lightgray;
    }
    &:hover {
      background-color: lightgray;
    }
  }
`;

const InputBox = styled.input`
  border: none;
  border-bottom: 1px solid #bbbbbb;
  height: 2rem;
  width: 100%;
  text-align: center;
  transition: 0.2s;
  background-color: #fafafa;
  &:focus {
    outline: none;
    transition: 0.2s;
    border-bottom: 1px solid black;
  }
`;

export default function Search() {
  const state = useSelector((state) => state.brandReducer);
  const dispatch = useDispatch();
  const nameArr = state.map((e) => e.name);

  const [text, setText] = useState("");
  const [hasText, setHasText] = useState(false);
  const [options, setOptions] = useState(nameArr);
  const [focused, setFocused] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setText("");
    setHasText(false);
    setOptions(nameArr);
    setFocused("");
    setIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const textHandler = (e) => {
    setText(e.target.value);
    if (e.target.value) {
      setHasText(true);
    } else {
      setHasText(false);
      setIndex(0);
      setFocused("");
    }
  };

  useEffect(() => {
    setOptions(
      nameArr.filter((carName) => (carName.includes(text) ? true : false))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  useEffect(() => {
    setFocused(options[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const handleDropdownMoves = (e) => {
    if (e.key === "ArrowUp" && index !== 0) {
      setIndex(index - 1);
    } else if (e.key === "ArrowDown" && index !== options.length - 1) {
      setIndex(index + 1);
    } else if (e.key === "Enter") {
      infoHandler(focused);
      setText("");
      setHasText(false);
      setFocused("");
    }
  };

  useEffect(() => {
    setFocused(options[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const infoHandler = (carName) => {
    const carInfo = state.filter((e) => e.name === carName);
    dispatch(setBrand(carInfo));
  };

  return (
    <Wrapper>
      <InputContainer>
        <InputBox
          type="text"
          placeholder="찾고자 하는 차량을 입력해주세요."
          onChange={textHandler}
          value={text}
          onKeyUp={(e) => {
            handleDropdownMoves(e);
          }}
        />
      </InputContainer>
      {hasText ? (
        <Dropbox
          options={options}
          focused={focused}
          infoHandler={infoHandler}
        />
      ) : null}
    </Wrapper>
  );
}

const Dropbox = ({ options, focused, infoHandler }) => {
  return (
    <DropdownContainer>
      {options.map((e) => {
        return (
          <li
            className={e === focused ? "focused" : ""}
            onClick={() => {
              infoHandler(e);
            }}
          >
            {e}
          </li>
        );
      })}
    </DropdownContainer>
  );
};
