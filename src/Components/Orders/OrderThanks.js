import React, { useContext } from "react";
import styled from "styled-components";
import { Overlay } from "../Style/Overlay";
import { OrderTitle } from "../Style/OrderElements";
import { Context } from "../Functions/context";

const Modal = styled.div`
  background-color: white;
  width: 600px;
  padding: 30px 30px 0 30px;
`;

export const OrderThanks = () => {
  const {
    orderThanks: { setOpenOrderThanks },
  } = useContext(Context);
  setTimeout(() => {
    setOpenOrderThanks(false);
  }, 2000);
  return (
    <Overlay>
      <Modal>
        <OrderTitle>Спасибо за заказ!</OrderTitle>
      </Modal>
    </Overlay>
  );
};
