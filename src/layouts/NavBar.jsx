import { useState } from "react";
import NavBarIconClose from "../icons/NavBarIconClose";
import NavBarIconOpen from "../icons/NavBarIconOpen";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  function changeState() {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <>
      <div onClick={changeState}>
        {isOpen === true ? (
          <button className={styles.btn}>
            <NavBarIconClose />
          </button>
        ) : (
          <button className={styles.btn}>
            <NavBarIconOpen />
          </button>
        )}
      </div>
      {isOpen && (
        <nav className={styles.nav}>
          <ul className={styles["list-items"]}>
            <li className={styles["list-item"]}>
              <a href="#" className={styles["link"]}>
                Acasa
              </a>
            </li>
            <li className={styles["list-item"]}>
              <a href="#" className={styles["link"]}>
                Actiunile noastre
              </a>
            </li>
            <li className={styles["list-item"]}>
              <a href="#" className={styles["link"]}>
                Blog
              </a>
            </li>
            <li className={styles["list-item"]}>
              <a href="#" className={styles["link"]}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
