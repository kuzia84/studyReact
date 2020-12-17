import React from "react";
import styled from "styled-components";
import { ButtonGreen } from "./ButtonGreen";

const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;
const Modal = styled.div`
  background: #fff;
  width: 600px;
  height: 600px;
`;
const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const Content = styled.section`
  padding: 20px 53px 43px 37px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 200px);
  justify-content: space-between;
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  line-height: 1.76;
  color: #000000;
  font-family: "Pacifico", cursive;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {
  function closeModal(e) {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  }
  if (!openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <HeaderContent>
            <div>{openItem.name}</div>
            <div>
              {openItem.price.toLocaleString("ru-RU", {
                style: "currency",
                currency: "RUB",
              })}
            </div>
          </HeaderContent>
          <ButtonGreen type="button">Добавить</ButtonGreen>
        </Content>
      </Modal>
    </Overlay>
  );
};
