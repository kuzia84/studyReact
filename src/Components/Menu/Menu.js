import React from "react";
import styled from "styled-components";
import { ListItem } from "./ListItem";
import { Banner } from "./Banner";
import { useFetch } from "../Hooks/useFetch";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  min-height: 50px;
  margin-left: 380px;
`;
const Section = styled.section`
  padding: 30px;
`;
const Loader = styled.div`
  width: 100%;
  height: 100%;
`;

export const Menu = () => {
  const res = useFetch();
  const dbMenu = res.response;
  return (
    <MenuStyled>
      <Banner />
      {res.response ? (
        <>
          <Section>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} />
          </Section>

          <Section>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other} />
          </Section>
        </>
      ) : res.error ? (
        <div>Sorry wee will fix it soon ..</div>
      ) : (
        <Loader>
          <div className="sk-wave">
            <div className="sk-rect sk-rect-1"></div>
            <div className="sk-rect sk-rect-2"></div>
            <div className="sk-rect sk-rect-3"></div>
            <div className="sk-rect sk-rect-4"></div>
            <div className="sk-rect sk-rect-5"></div>
          </div>
        </Loader>
      )}
    </MenuStyled>
  );
};
