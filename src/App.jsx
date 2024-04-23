import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <main className={`${theme} bg-white dark:bg-black dark:text-white`}>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
