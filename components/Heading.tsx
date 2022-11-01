import { FC } from "react";

const Heading: FC<any> = ({ tag, text }) => {
  const Tag = tag || "h1";
  return <Tag>{text}</Tag>;
};

export default Heading;
