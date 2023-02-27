import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  { path: "/", title: "Movie" },

  { path: "/movies", title: "AddMovies" },

//   { path: "/about", title: "About" }
];

export default function Navbar() {
  return (
    <div className={styles.navbar} >
      {links.map((item) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
          key={item.path}
          to={item.path}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}
