import "./App.css";
import AdminHero from "./components/Admin/AdminHero";
import DetailsPage from "./pages/user-page/DetailsPage";
import Home from "./pages/user-page/Home";
import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import Auth from "./components/Auth";
import PurchasePage from "./pages/user-page/PurchasePage";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { CheckLoginUser } from "./action/auth";
import ForgotPassword from "./pages/user-page/ForgotPassword";
import OrderDetails from "./pages/user-page/OrderDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  const userIsLogin = useSelector((state) => state.user.user)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CheckLoginUser())
  }, [])


  return (
    <div className="bg-primary w-full">
      <Header />
      <BrowserRouter>
        <Routes>
          {/* user pages */}

          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={userIsLogin ? <Navigate replace to="/home" /> : <Auth />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/purchase/:id" element={userIsLogin ? <PurchasePage /> : <Navigate replace to="/auth" />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/myorder/details/:id" element={<OrderDetails />} />
          {/* adminPages */}
          <Route path="/admin" element={<AdminHero />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
