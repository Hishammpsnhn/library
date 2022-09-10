import "./App.css";
import AdminHero from "./components/Admin/AdminHero";
import Form from "./components/Admin/Form";
import Modal from "./components/Admin/Modal";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DetailsPage from "./pages/user-page/detailsPage";
import Home from "./pages/user-page/Home";
import styles from "./styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import PurchasePage from "./pages/user-page/PurchasePage";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";

function App() {
  const count = useSelector((state) => state.counter.books)
  console.log(count)


  return (
    <div className="overflow-hidden ">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<AdminHero />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
