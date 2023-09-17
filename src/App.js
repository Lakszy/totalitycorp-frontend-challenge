import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Main from "./Components/Main/Main";
import FilteredProducts from "./Components/FilterProducts/FilteredProducts";
import SingleProduct from "./Components/FilterProducts/SingleProduct";
import Login from "./Components/Login/Login";
import SimpleRegistration from "./Components/CheckOut/Checkout";

function App() {
  const user = useSelector((state) => state.user.user); 
    const { authUser } = user ;
    console.log(user)
    console.log(authUser)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Main /> : <Login />}
        />
        <Route
          path="/filteredProducts/:type"
          element={<FilteredProducts />}
        />
        <Route
          path="/filteredProducts/:type/:id"
          element={<SingleProduct />}
        />
        <Route
          path="/checkout/lakszy"
          element={<SimpleRegistration />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

