import React, { useRef, useContext } from "react";
import styled from "styled-components";
import trashImage from "../../images/trash.svg";
import { totalPriceItems } from "../Functions/secondaryFunction";
import { formatCurrency } from "../Functions/secondaryFunction";
import { Context } from "../Functions/context";

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
  cursor: pointer;
`;
const ItemName = styled.span`
  flex-grow: 1;
  max-width: 196px;
`;
const ItemTopping = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #9a9a9a;
`;
const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

export const OrderListItem = ({ order, index, deleteItem }) => {
  const {
    openItem: { setOpenItem },
  } = useContext(Context);
  const selectedTopping =
    order.topping &&
    order.topping
      .filter((item) => item.checked)
      .map((item) => item.name)
      .join(", ");
  const refDeleteButton = useRef(null);
  return (
    <OrderItemStyled
      onClick={(e) =>
        e.target !== refDeleteButton.current && setOpenItem({ ...order, index })
      }
    >
      <ItemName>
        {order.name} {order.choices}
        <ItemTopping>{selectedTopping}</ItemTopping>
      </ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
      <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)} />
    </OrderItemStyled>
  );
};
