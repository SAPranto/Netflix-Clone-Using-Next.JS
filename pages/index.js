import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner";
import NavBar from "../components/navbar";
import Card from "../components/card";
import SectionCards from "../components/section-cards";
import { getVideos,getPopularVideos} from "../lib/videos";
import { magic } from "../lib/magic-client";

export async function getServerSideProps(context) {
  const disneyVideos = await getVideos("Hollywood Movie trailers");
  const productivityVideos = await getVideos("Latest Bollywood Songs");
  const travelVideos = await getVideos("Valorant Highlights");
  const popularVideos = await getPopularVideos()
  // const popularVideos = await getVideos();

  return {
    props: { disneyVideos, travelVideos, productivityVideos, popularVideos }, // will be passed to the page component as props
  };
}

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

<div className={styles.main}>
<NavBar />
  <Banner
    title="Avengers"
    subTitle="Infinity War"
    imgUrl="/static/clifford.webp"
  />

  <div className={styles.sectionWrapper}>
    <SectionCards title="Movie trailers" videos={disneyVideos} size="large" />
    <SectionCards title="Valorant Highlights" videos={travelVideos} size="large" />
    <SectionCards title="Bollywood Songs" videos={productivityVideos} size="large"/>
    <SectionCards title="Popular" videos={popularVideos} size="large" />
  </div>
</div>
</div>
);
}