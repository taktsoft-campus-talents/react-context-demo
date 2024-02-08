import { useState } from "react";
import styles from "./App.module.css";
import { Products } from "./components/Products";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import clsx from "clsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <nav className={styles["main-nav"]}>
        <ul>
          <li
            className={clsx(currentPage === "home" && styles.active)}
            title="Home"
            onClick={() => {
              setCurrentPage("home");
            }}
          >
            Home
          </li>
          <li
            className={clsx(currentPage === "products" && styles.active)}
            title="Products"
            onClick={() => {
              setCurrentPage("products");
            }}
          >
            Products
          </li>
          <li
            className={clsx(currentPage === "contact" && styles.active)}
            title="Contact"
            onClick={() => {
              setCurrentPage("contact");
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
      {currentPage === "products" ? (
        <Products />
      ) : currentPage === "contact" ? (
        <Contact />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
