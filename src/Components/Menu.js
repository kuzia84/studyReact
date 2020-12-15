import React from "react";
import styled from "styled-components";
import bdMenu from "./DBMenu";
import { ListItem } from "./ListItem";
import bannerImg from "../images/banner.png";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  min-height: 50px;
`;
const Section = styled.section`
  padding: 30px;
`;
const Banner = styled.div`
  min-height: 208px;
  background-image: url(${bannerImg});
  background-position: center;
  background-repeat: no-repeat;
`;

export const Menu = () => (
  <MenuStyled>
    <Banner />
    <Section>
      <h2>Бургеры</h2>
      <ListItem itemList={bdMenu.burger} />
    </Section>

    <Section>
      <h2>Закуски / Напитки</h2>
      <ListItem itemList={bdMenu.other} />
    </Section>
  </MenuStyled>
);
