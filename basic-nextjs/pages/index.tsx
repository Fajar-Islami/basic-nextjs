import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS Basic | Home Page</title>
      </Head>
      <Layout>
        <h1 className={styles["title-homepage"]}>Welcome ahmad fajar</h1>
      </Layout>
    </>
  );
};

export default Home;
