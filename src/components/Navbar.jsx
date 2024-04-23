import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LocationContext";

export default function Navbar() {
  const { toggleTheme } = useTheme();
  const { lang, toggleLanguage } = useLanguage();

  return (
    <nav
      className="bg-blue-900 dark:bg-red-500
     text-white flex justify-between px-4 h-16"
    >
      <span className="my-auto text-2xl">My Portfolio</span>
      <button onClick={toggleTheme}>Switch theme</button>
      <button onClick={toggleLanguage}>Switch lang</button>
      <ul className="flex gap-4 my-auto text-lg">
        <li>
          <Link to="/">{lang === "fr" ? "Accueil" : "Home"}</Link>
        </li>
        <li>
          <Link to="/about">{lang === "fr" ? "A propos" : "About"}</Link>
        </li>
        <li>
          <Link to="/projects">{lang === "fr" ? "Projets" : "Projects"}</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
