import Navbar from "./Navbar";
import styles from "../styles/index.module.css";

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.brand_box}>
          <Navbar />
        </div>

        <div className={styles.text_box}>
          <h1 className={styles.heading_primary}>
            <span className={styles.heading_primary_main}>
              Welcome to the world of NextJS
            </span>
            <span className={styles.heading_primary_second}>
              Love with JavaScript
            </span>
          </h1>
          <a
            href="#"
            className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}
          >
            Next JS Tutorials
          </a>
        </div>
      </header>
    </>
  );
};

export default Home;
