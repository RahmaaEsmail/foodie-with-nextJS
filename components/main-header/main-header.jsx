import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Link from "next/link";
import NavLink from "../nav-link/nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="A plate with food on it." priority />
          NEXTLEVEL FOOD
        </Link>

        <nav className={styles.nav}>
          <ul>
            <NavLink href="/meals">Browse Meals</NavLink>
            <NavLink href="/community">Foodies Community</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
