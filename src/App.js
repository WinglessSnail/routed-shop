import { useState } from "react";
import { Home } from "./components/Home";
import { Nothing } from "./components/nothin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Products from "./components/products";
import ItemCard from "./components/products/itemCard";
import "./styles/main.css";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nothing />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login setUserName={setUserName} />} />
          <Route path="products" element={<Products userName={userName} />}>
            <Route path=":productId" element={<ItemCard/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
