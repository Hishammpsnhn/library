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

function App() {
  return (
   <div className='overflow-hidden ' >
    {/* <Home/> */}
    {/* <DetailsPage/> */}
    <AdminHero/>

   </div>
    );
}

export default App;
