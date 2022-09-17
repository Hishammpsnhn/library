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

function App() {
  const userIsLogin = useSelector((state) => state.user.user)
  const [user,setUser] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    setUser(userIsLogin)
  }, [userIsLogin])

  console.log(user)
  return (
    <div className="overflow-hidden ">

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/"  element={( user===null ? <Navigate replace to="/auth" /> : <Navigate replace to="/home" /> )}  />
          <Route path="/auth" element={( user===null ? <Auth /> : <Navigate replace to="/home" /> )}  />
          <Route path="/admin" element={<AdminHero />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
