import { FC } from "react";
import { socialTypes } from "../types";
import { GetStaticProps } from "next";
import Head from "next/head";
// import Image from "next/image";
import React from "react";
import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";
// import mainImage from "../public/mainimage.png";
import Socials from "../components/Socials";

type socialTypesProps = {
  socials: socialTypes;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: data },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

const Home: FC<socialTypesProps> = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next.js Applic" />
      <Socials socials={socials} />
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          alt="preview"
          src={mainImage}
          sizes="100w"
          height={350}
          placeholder="blur"
        />
      </div> */}
    </div>
  );
};

export default Home;
