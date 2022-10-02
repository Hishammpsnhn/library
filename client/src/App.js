import "./App.css";
import AdminHero from "./components/Admin/AdminHero";
import DetailsPage from "./pages/user-page/DetailsPage";
import Home from "./pages/user-page/Home";
import { BrowserRouter, Navigate, Route, Routes,  } from "react-router-dom";
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
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
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
