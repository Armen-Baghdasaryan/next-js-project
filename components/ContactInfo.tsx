import { FC } from "react";
import { contactType } from "../types";
import Heading from "./Heading";

type contactTypeInfo = {
  contact: contactType;
};

const ContactInfo: FC<contactTypeInfo> = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return <Heading tag="h3" text="Empty Contact" />;
  }

  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
};

export default ContactInfo;
