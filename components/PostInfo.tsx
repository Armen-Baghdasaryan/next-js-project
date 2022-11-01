import { FC } from "react";
import React from "react";
import Heading from "./Heading";
import { postType } from "../types";

type postInfoProps = {
  post: postType;
};

const PostInfo: FC<postInfoProps> = ({ post }) => {
  const { title, body } = post;

  return (
    <>
      <Heading tag="h3" text={title} />
      <div>
        <strong>Title: </strong>
        {title}
      </div>
      <div>
        <strong>Body: </strong>
        {body}
      </div>
    </>
  );
};

export default PostInfo;
