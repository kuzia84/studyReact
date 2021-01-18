import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { GlobalStyle } from "./Components/Style/GlobalStyle";
import { NavBar } from "./Components/NavBar/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Orders/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
import { useAuth } from "./Components/Hooks/useAuth";
import { OrderConfirm } from "./Components/Orders/OrderConfirm";
import { useOrderConfirm } from "./Components/Hooks/useOrderConfirm";
import { useOrderThanks } from "./Components/Hooks/useOrderThanks";
import { OrderThanks } from "./Components/Orders/OrderThanks";
import { Context } from "./Components/Functions/context";

const firebaseConfig = {
  apiKey: "AIzaSyCy24hxwnmYWHDLqlrfz4GUhNSJa2P-WY0",
  authDomain: "mrdonats-24a4b.firebaseapp.com",
  databaseURL:
    "https://mrdonats-24a4b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonats-24a4b",
  storageBucket: "mrdonats-24a4b.appspot.com",
  messagingSenderId: "191239083704",
  appId: "1:191239083704:web:c54c32cbec57d17a40064d",
};
firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orderConfirm = useOrderConfirm();
  const orderThanks = useOrderThanks();
  const orders = useOrders();

  return (
    <Context.Provider
      value={{
        auth,
        openItem,
        orders,
        orderConfirm,
        orderThanks,
        firebaseDatabase: firebase.database,
      }}
    >
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu />
      {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
      {orderThanks.openOrderThanks && <OrderThanks />}
    </Context.Provider>
  );
}

export default App;
