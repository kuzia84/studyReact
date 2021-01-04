import React, { useContext } from "react";
import styled from "styled-components";
import { Overlay } from "../Style/Overlay";
import { OrderTitle, Total, TotalPrice } from "../Style/OrderElements";
import { ButtonGreen } from "../Style/ButtonGreen";
import { projection } from "../Functions/secondaryFunction";
import { totalPriceItems } from "../Functions/secondaryFunction";
import { formatCurrency } from "../Functions/secondaryFunction";
import { Context } from "../Functions/context";

const Modal = styled.div`
  background-color: white;
  width: 600px;
  padding: 30px;
`;
const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;
const BtnWrapper = styled.div`
  text-align: center;
`;
const rulesData = {
  itemName: ["name"],
  price: ["price"],
  count: ["count"],
  topping: [
    "topping",
    (arr) => arr.filter((obj) => obj.checked).map((obj) => obj.name),
    (arr) => (arr.length ? arr : "no topping"),
  ],
  choice: ["choice", (item) => (item ? item : "no choices")],
};
const sendOrder = (dataBase, orders, authentification) => {
  const newOrder = orders.map(projection(rulesData));
  dataBase.ref("orders").push().set({
    nameClient: authentification.displayName,
    email: authentification.email,
    order: newOrder,
  });
};

export const OrderConfirm = ({ firebaseDatabase }) => {
  const {
    orders: { orders, setOrders },
    auth: { authentification },
    orderConfirm: { setOpenOrderConfirm },
    orderThanks: { setOpenOrderThanks },
  } = useContext(Context);
  const dataBase = firebaseDatabase();
  const total = orders.reduce(
    (result, order) => result + totalPriceItems(order),
    0
  );
  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentification.displayName}</OrderTitle>
        <Text>Осталось только подтвердить заказ</Text>
        <Total>
          <span>Итого</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <BtnWrapper>
          <ButtonGreen
            onClick={() => {
              sendOrder(dataBase, orders, authentification);
              setOrders([]);
              setOpenOrderConfirm(false);
              setOpenOrderThanks(true);
            }}
          >
            Подтвердить
          </ButtonGreen>
        </BtnWrapper>
      </Modal>
    </Overlay>
  );
};
