import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartContext from "./store/CartStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <CartContext.Provider value={{items: []}}>
      <App />
      </CartContext.Provider>
  </React.StrictMode>
);
