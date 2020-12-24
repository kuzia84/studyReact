import React from "react";
import styled from "styled-components";

const ChoicesWrap = styled.div`
  max-width: 500px;
  margin: 10px auto 0;
  column-count: 2;
  column-gap: 15px;
`;
const ChoicesLabel = styled.label`
  font-size: 20px;
  line-height: 23px;
  cursor: pointer;
  display: block;
  margin-bottom: 23px;
`;
const ChoicesRadio = styled.input`
  cursor: pointer;
  margin: 0 10px 0 0;
  width: 23px;
  height: 23px;
  display: inline-block;
  vertical-align: top;
`;

export function Choices({ openItem, choice, changeChoices }) {
  return (
    <>
      <h3>Выберите</h3>
      <ChoicesWrap>
        {openItem.choices.map((item, i) => (
          <ChoicesLabel key={i}>
            <ChoicesRadio
              type="radio"
              name="choices"
              checked={choice === item}
              value={item}
              onChange={changeChoices}
            />
            {item}
          </ChoicesLabel>
        ))}
      </ChoicesWrap>
    </>
  );
}
