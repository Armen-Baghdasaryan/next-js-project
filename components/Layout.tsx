import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
