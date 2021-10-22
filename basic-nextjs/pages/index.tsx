import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1 className={styles["title-homepage"]}>Welcome ahmad fajar</h1>
      <Footer />
    </>
  );
};

export default Home;
