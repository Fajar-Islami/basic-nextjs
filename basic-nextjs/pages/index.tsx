import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page">
        <h1 className={styles["title-homepage"]}>Welcome ahmad fajar</h1>
      </Layout>
    </>
  );
};

export default Home;
