import React from "react";
import styled from "styled-components";
import { ButtonGreen } from "../Style/ButtonGreen";
import { OrderListItem } from "./OrderListItem";
import { totalPriceItems } from "../Functions/secondaryFunction";
import { formatCurrency } from "../Functions/secondaryFunction";

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
const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;
const OrderContent = styled.div`
  flex-grow: 1;
`;
const OrderList = styled.ul``;
const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;
const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 15px;
`;
const EmptyList = styled.p`
  text-align: center;
`;

export const Order = ({
  orders,
  setOrders,
  setOpenItem,
  authentification,
  logIn,
}) => {
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
  const checkOut = () =>
    authentification ? console.log("Заказ", orders) : logIn();

  return (
    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      <OrderContent>
        {orders.length ? (
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
        ) : (
          <EmptyList>Список заказов пуст</EmptyList>
        )}
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>{totalCounter}</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
      </Total>
      <ButtonGreen type="button" onClick={checkOut}>
        Оформить
      </ButtonGreen>
    </OrderStyled>
  );
};
