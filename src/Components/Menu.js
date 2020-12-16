import React from "react";
import styled from "styled-components";
import bdMenu from "./DBMenu";
import { ListItem } from "./ListItem";
import { Banner } from "./Banner";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  min-height: 50px;
`;
const Section = styled.section`
  padding: 30px;
`;

export const Menu = ({ setOpenItem }) => (
  <MenuStyled>
    <Banner />
    <Section>
      <h2>Бургеры</h2>
      <ListItem itemList={bdMenu.burger} setOpenItem={setOpenItem} />
    </Section>

    <Section>
      <h2>Закуски / Напитки</h2>
      <ListItem itemList={bdMenu.other} setOpenItem={setOpenItem} />
    </Section>
  </MenuStyled>
);
