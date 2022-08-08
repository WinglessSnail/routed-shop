import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/products";
import Login from "./components/login/login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}>
          <Route path=":productId" element={<h1>product is here</h1>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
