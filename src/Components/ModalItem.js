import React from "react";
import styled from "styled-components";

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
  min-height: 600px;
`;
const Banner = styled.div`
  width: 100%;
  min-height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 53px 0 37px;
  font-size: 30px;
  line-height: 1.76;
  color: #000000;
  font-family: "Pacifico", cursive;
`;
const ItemName = styled.div`
  margin-top: 20px;
`;
const ItemPrice = styled.div`
  margin-top: 20px;
`;
const ModalBottom = styled.div`
  margin-top: 220px;
  margin-bottom: 43px;
  text-align: center;
`;
const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #299b01;
  min-width: 250px;
  min-height: 65px;
  font-size: 21px;
  line-height: 1.2;
  color: #ffffff;
  border: none;
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
        <ItemInfo>
          <ItemName>{openItem.name}</ItemName>
          <ItemPrice>
            {openItem.price.toLocaleString("ru-RU", {
              style: "currency",
              currency: "RUB",
            })}
          </ItemPrice>
        </ItemInfo>
        <ModalBottom>
          <Button type="button">Добавить</Button>
        </ModalBottom>
      </Modal>
    </Overlay>
  );
};
