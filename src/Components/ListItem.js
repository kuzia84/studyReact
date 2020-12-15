import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  font-size: 30px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  margin: 30px 30px 0 0;
  padding: 15px;
  color: white;
  z-index: 1;
  transition: 0.3s ease-in-out;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.5;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px #000;
    &:after {
      opacity: 0;
    }
  }
`;

export const ListItem = ({ itemList }) => (
  <List>
    {itemList.map((item) => (
      <Item key={item.id} img={item.img}>
        <p>{item.name}</p>
        <p>
          {item.price.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
          })}
        </p>
      </Item>
    ))}
  </List>
);
