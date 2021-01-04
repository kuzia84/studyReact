import React, { useContext } from "react";
import styled from "styled-components";
import { ButtonGreen } from "../Style/ButtonGreen";
import { Total, TotalPrice, OrderTitle } from "../Style/OrderElements";
import { OrderListItem } from "./OrderListItem";
import { totalPriceItems } from "../Functions/secondaryFunction";
import { formatCurrency } from "../Functions/secondaryFunction";
import { Context } from "../Functions/context";

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background: #fff;
  width: 100%;
  max-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;
const OrderContent = styled.div`
  flex-grow: 1;
`;
const OrderList = styled.ul``;
const EmptyList = styled.p`
  text-align: center;
`;

export const Order = () => {
  const {
    orders: { orders, setOrders },
    openItem: { setOpenItem },
    auth: { authentification, logIn },
    orderConfirm: { setOpenOrderConfirm },
  } = useContext(Context);
  const deleteItem = (index) => {
    // const newOrder = [...orders];
    // newOrder.splice(index, 1);
    const newOrder = orders.filter((item, i) => index !== i);
    setOrders(newOrder);
  };
  const total = orders.reduce(
    (result, order) => result + totalPriceItems(order),
    0
  );
  const totalCounter = orders.reduce(
    (result, order) => result + order.count,
    0
  );

  return (
    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      {orders.length ? (
        <>
          <OrderContent>
            <OrderList>
              {orders.map((order, index) => (
                <OrderListItem
                  order={order}
                  key={index}
                  index={index}
                  deleteItem={deleteItem}
                  setOpenItem={setOpenItem}
                />
              ))}
            </OrderList>
          </OrderContent>
          <Total>
            <span>Итого</span>
            <span>{totalCounter}</span>
            <TotalPrice>{formatCurrency(total)}</TotalPrice>
          </Total>
          <ButtonGreen
            type="button"
            onClick={() =>
              authentification ? setOpenOrderConfirm(true) : logIn()
            }
          >
            Оформить
          </ButtonGreen>
        </>
      ) : (
        <OrderContent>
          <EmptyList>Список заказов пуст</EmptyList>
        </OrderContent>
      )}
    </OrderStyled>
  );
};
