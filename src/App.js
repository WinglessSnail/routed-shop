import { useState } from "react";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Products from "./components/products";
import ItemCard from "./components/products/itemCard";
import "./styles/main.css";
import { Not } from "./components/not";

function App() {
  const [userName, setUserName] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="login" element={<Login setUserName={setUserName} />} />
          <Route path="products" >
            <Route index element={<Products userName={userName} />} />
            <Route path=":productId" element={<ItemCard />} />
          </Route>
          <Route path="nopage" element={<Not/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
