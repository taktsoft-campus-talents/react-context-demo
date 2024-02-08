import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Products } from "./components/Products";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import clsx from "clsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    function handleLocationChange() {
      switch (location.pathname) {
        case "/products":
          if (currentPage !== "products") {
            setCurrentPage("products");
          }
          break;
        case "/contact":
          if (currentPage !== "contact") {
            setCurrentPage("contact");
          }
          break;
        default:
          if (currentPage !== "home") {
            setCurrentPage("home");
          }
          break;
      }
    }
    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [currentPage]);

  return (
    <>
      <nav className={styles["main-nav"]}>
        <ul>
          <li
            className={clsx(currentPage === "home" && styles.active)}
            title="Home"
            onClick={() => {
              setCurrentPage("home");
              history.pushState({}, "", "/home");
            }}
          >
            Home
          </li>
          <li
            className={clsx(currentPage === "products" && styles.active)}
            title="Products"
            onClick={() => {
              history.pushState({}, "", "/products");
              setCurrentPage("products");
            }}
          >
            Products
          </li>
          <li
            className={clsx(currentPage === "contact" && styles.active)}
            title="Contact"
            onClick={() => {
              history.pushState({}, "", "/contact");
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
