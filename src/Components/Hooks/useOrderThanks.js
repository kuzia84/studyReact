import { useState } from "react";

export const useOrderThanks = () => {
  const [openOrderThanks, setOpenOrderThanks] = useState(false);
  return { openOrderThanks, setOpenOrderThanks };
};
