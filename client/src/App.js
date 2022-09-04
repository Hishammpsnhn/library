import "./App.css";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import styles from "./styles";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden  ">
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>
      <div className="bg-gradient-to-r from-black via-slate-800 to-black ">
        {/* <Hero/> */}
      </div>
      <div className={`${styles.boxWidth} ${styles.flexCenter} m-auto `}>
        <Details />
      </div>
      <div className={`${styles.boxWidth} ${styles.flexCenter} m-auto `}>
        <Footer />
      </div>
    </div>
  );
}

export default App;