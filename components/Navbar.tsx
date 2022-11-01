import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Posts", href: "/posts" },
  { id: 3, title: "Contacts", href: "/contacts" },
];

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image width={50} height={50} src="/logo1.png" alt="armDev" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, href }) => {
          return (
            <Link
              className={pathname === href ? styles.active : null}
              key={id}
              href={href}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
