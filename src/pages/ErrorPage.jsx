import { NavLink } from "react-router-dom";
import "../styles/Global.css";

function ErrorPage() {
  const errorpic = [
    {
      id: 1,
      content: "{°_°}",
      text: "Il fallait prendre a gauche avant le carrefour..."
    },
    {
      id: 2,
      content: "(>O<)",
      text: "VOUS NE PASSEREZ PAAAAS !",
    },
    {
      id: 3,
      content: "(°Δ°)",
      text: "Mais, qu'est-ce que vous faites là ??? Allez pshit, retournez d'où venez",
    },
    {
      id: 4,
      content: "(T_T)",
      text: "Désolé mon vieux, on est complet par ici",
    },
    {
      id: 5,
      content: "<[°ᚄ°]>",
      text: "ERROR 40 ... 404 ou 402 ? ...",
    },
    {
      id: 6,
      content: "=(^.^)=",
      text: "♫ Oh, êtes vous perdu ? Si oui, suivez le lapin blanc ! Il est partie par là",
    },
  ];

  let randompic = errorpic[Math.floor(Math.random() * errorpic.length)];

  return (
    <>
    <section className="error-content">
      <NavLink className="error-content" to="/home">
        <h2 id="error-ascii"> {randompic.content} </h2>
        <h2 id="error-text"> {randompic.text} </h2>
        <h3> Pas de panique, clique ici pour retourner à l&apos;accueil</h3>
      </NavLink>
    </section>
    </>
  );
}

export default ErrorPage;
