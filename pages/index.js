import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home({ url }) {
  const [image, setImage] = useState("");
  const [model, setModel] = useState("");

  useEffect(async () => {
    const { model: modelName, image: imageUrl } = await fetch(url).then((res) =>
      res.json()
    );

    setImage(imageUrl);
    setModel(modelName);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>IMA ML</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>IMA ML</h1>
        <h3>Example of using React.js with {model} from RunwayML</h3>

        {image && (
          <Image unoptimized src={image} alt={model} width={512} height={512} />
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  // const { model, image } = await fetch(
  //   `${ctx.req.headers.referer}/api/model`
  // ).then((res) =x> res.json());

  return {
    props: {
      // model,
      // image,
      url: `https://${ctx.req.headers.host}/api/model`,
    },
  };
}
