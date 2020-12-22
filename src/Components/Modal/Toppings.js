import React from "react";
import styled from "styled-components";

const ToppingWrap = styled.div`
  max-width: 500px;
  margin: 10px auto 0;
  column-count: 2;
  column-gap: 15px;
`;
const ToppingLabel = styled.label`
  font-size: 20px;
  line-height: 23px;
  cursor: pointer;
  display: block;
  margin-bottom: 23px;
`;
const ToppingCheckBox = styled.input`
  cursor: pointer;
  margin: 0 10px 0 0;
  width: 23px;
  height: 23px;
  display: inline-block;
  vertical-align: top;
`;

export function Toppings({ toppings, checkToppings }) {
  return (
    <>
      <h3>Добавки</h3>
      <ToppingWrap>
        {toppings.map((item, i) => (
          <ToppingLabel key={i}>
            <ToppingCheckBox
              type="checkbox"
              checked={item.checked}
              onChange={() => checkToppings(i)}
            />
            {item.name}
          </ToppingLabel>
        ))}
      </ToppingWrap>
    </>
  );
}
