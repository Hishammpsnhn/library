import "./App.css";
import Header from "./components/Header";
import styles from "./styles";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
        <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
