import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../contexts/LocationContext";

export default function HomePage() {
  const { lang } = useLanguage();

  const test = useOutletContext();

  console.log(test);

  return (
    <>
      <h1 className="text-4xl text-center my-12">
        {lang === "fr" ? "Page d'accueil" : "Homepage"}{" "}
      </h1>
    </>
  );
}
