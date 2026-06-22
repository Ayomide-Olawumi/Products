import React, { useEffect, useState} from "react"
import { BrowserRouter, Routes, Route, Navigate, useLocation} from "react-router-dom"
import Products from "./pages/Products.jsx"
import ProductDetails from "./pages/ProductDetails.jsx"
import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Services from "./Componenets/Services.jsx"
import Settings from "./Componenets/Settings.jsx"
import Orders from "./Componenets/Orders.jsx"
import Others from "./Componenets/Others.jsx"
import Privacy from "./Componenets/Privacy.jsx"
import Sidebar from "./Componenets/Sidebar.jsx"
import Notfound from "./pages/Notfound.jsx"
import Users from "./pages/Users.jsx"
import User from "./Componenets/User.jsx"
import Quotes from "./pages/Quotes.jsx"
import Quote from "./Componenets/Quote.jsx"
import Carousel from "./Componenets/Carousel.jsx";

const App = () => {

  

  const location = useLocation()
  console.log(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/dashboard" element= {<Dashboard/>}>
          <Route path ="/dashboard/services" element={<Services/>}/>
          <Route path ="/dashboard/orders" element={<Orders/>}/>
            <Route path ="/dashboard/privacy" element={<Privacy/>}/>
            <Route path ="/dashboard/others" element={<Others/>}/>
              <Route path ="/dashboard/settings" element={<Settings/>}/>
        </Route>
        <Route path="/users" element={<Users />}/>
        <Route path="/user/:id" element={<User />}/>
        <Route path= "/quotes" element={<Quotes/>}/>
        <Route path= "/quote/:id" element={<Quote/>}/>
        <Route path= "/carousel" element={<Carousel/>}/>
        <Route path ="*" element= {<Notfound/>}/>
      </Routes>
    </>
  )
}

export default App