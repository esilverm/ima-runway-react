import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home({ model, image, url }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>IMA ML</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>IMA ML</h1>
        <h3>Example of using React.js with {model} from RunwayML</h3>
        <Image unoptimized src={image} alt={model} width={512} height={512} />
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { model, image } = await fetch(
    `https://ml-for-arts-runway.vercel.app/api/model`
  ).then((res) => res.json());

  return {
    props: {
      model,
      image,
    },
  };
}
