import styles from "./RootLayout.module.css";
import { Outlet, NavLink } from "react-router-dom";

export function RootLayout() {
  const getNavClass = ({ isActive }) =>
    isActive ? styles["nav-active"] : undefined;

  return (
    <>
      <nav className={styles["main-nav"]}>
        <ul>
          <li title="Home">
            <NavLink className={getNavClass} to="/">
              Home
            </NavLink>
          </li>
          <li title="Products">
            <NavLink className={getNavClass} to="/products">
              Products
            </NavLink>
          </li>
          <li title="Contact">
            <NavLink className={getNavClass} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet context={{ tofu: "test" }} />
      <footer>
        <p>Copyright Ralf</p>
      </footer>
    </>
  );
}
