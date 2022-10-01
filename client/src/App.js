import "./App.css";
import AdminHero from "./components/Admin/AdminHero";
import Form from "./components/Admin/Form";
import Modal from "./components/Admin/Modal";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DetailsPage from "./pages/user-page/DetailsPage";
import Home from "./pages/user-page/Home";
import styles from "./styles";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./components/Auth";
import PurchasePage from "./pages/user-page/PurchasePage";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { CheckLoginUser } from "./action/auth";
import ForgotPassword from "./pages/user-page/ForgotPassword";

function App() {
  const userIsLogin = useSelector((state) => state.user.user)

  const [user, setUser] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(CheckLoginUser())
  }, [])

  useEffect(() => {
    if (userIsLogin) setUser(true)
  }, [userIsLogin])

  return (
    <div className=" ">
  
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={user?<Navigate replace to="/home" />:<Navigate replace to="/auth" />} />
          <Route path="/auth" element={user ? <Navigate replace to="/home" /> : <Auth />} />
          <Route path="/admin" element={<AdminHero />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/purchase/:id" element={ user ? <PurchasePage /> : <Navigate replace to="/auth" />  } />
          <Route path="/forgot-password" element={ <ForgotPassword/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
