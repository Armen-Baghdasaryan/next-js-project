import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import PostInfo from "../../components/PostInfo";
import { postType } from "../../types";

type postTypeProps = {
  post: postType;
};

export const getStaticPaths: GetStaticPaths = async () => {
  //SGG  Static Side Generation
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: data },
  };
};

const Posts: FC<postTypeProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Post Page</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Posts;
