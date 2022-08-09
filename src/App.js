import { useState } from "react";
import { Home } from "./components/login/Home";
import Header from "./components/header.jsx";
import Login from "./components/login/login";
import Products from "./components/products";
import "./styles/main.css";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { Nothing } from "./components/nothin";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nothing />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login setUserName={setUserName} />} />
          <Route path="products" element={<Products userName={userName} />}>
            <Route path=":productId" element={<h1>product is here</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
