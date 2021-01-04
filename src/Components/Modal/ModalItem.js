import React, { useContext } from "react";
import styled from "styled-components";
import { ButtonGreen } from "../Style/ButtonGreen";
import { Overlay } from "../Style/Overlay";
import { CountItem } from "./CountItem";
import { Toppings } from "./Toppings";
import { Choices } from "./Choices";
import { useCount } from "../Hooks/useCount";
import { useToppings } from "../Hooks/useToppings";
import { useChoices } from "../Hooks/useChoices";
import { useTitle } from "../Hooks/useTitle";
import { totalPriceItems } from "../Functions/secondaryFunction";
import { formatCurrency } from "../Functions/secondaryFunction";
import { Context } from "../Functions/context";
import { ContextItem } from "../Functions/contextItem";

const Modal = styled.div`
  background: #fff;
  width: 600px;
  /* height: 600px; */
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
  margin-bottom: 13px;
`;
const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 13px 0;
`;

export const ModalItem = () => {
  const {
    openItem: { openItem, setOpenItem },
    orders: { orders, setOrders },
  } = useContext(Context);
  const counter = useCount(openItem);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;
  useTitle(openItem.name);

  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };
  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };
  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  };
  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <ContextItem.Provider value={{ counter, toppings, choices }}>
        <Modal>
          <Banner img={openItem.img} />
          <Content>
            <HeaderContent>
              <div>{openItem.name}</div>
              <div>{formatCurrency(openItem.price)}</div>
            </HeaderContent>
            <CountItem />
            {openItem.toppings && <Toppings />}
            {openItem.choices && <Choices />}
            <TotalPriceItem>
              <span>Цена</span>
              <span>{formatCurrency(totalPriceItems(order))}</span>
            </TotalPriceItem>
            <ButtonGreen
              type="button"
              onClick={isEdit ? editOrder : addToOrder}
              disabled={order.choices && !order.choice}
            >
              {isEdit ? "Редактировать" : "Добавить"}
            </ButtonGreen>
          </Content>
        </Modal>
      </ContextItem.Provider>
    </Overlay>
  );
};
