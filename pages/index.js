import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner";
import NavBar from "../components/navbar";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar username="ankita@ank.com" />
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />
      {/*
      <Card /> */}
    </div>
  );
}