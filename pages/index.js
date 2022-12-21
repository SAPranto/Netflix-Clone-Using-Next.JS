import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner";
import NavBar from "../components/navbar";
import Card from "../components/card";
import SectionCards from "../components/section-cards";
import { getVideos } from "../lib/videos";

export async function getServerSideProps(context) {
  const disneyVideos = await getVideos("Hollywood Movie trailers");
  const productivityVideos = await getVideos("Latest Hollywood Songs");
  const travelVideos = await getVideos("Valorant Highlights");
  // const popularVideos = await getVideos();

  return {
    props: { disneyVideos, travelVideos, productivityVideos }, // will be passed to the page component as props
  };
}

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
}) {
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
      <div className={styles.sectionWrapper}>
        <SectionCards title="Latest Movie Trailers" videos={disneyVideos} size="large" />
        <SectionCards title="Latest Songs" videos={productivityVideos} size="large" />
        <SectionCards title="Valorant Highlights" videos={travelVideos} size="large" />
      </div>
    </div>
  );
}