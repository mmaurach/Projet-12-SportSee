import { Link } from "react-router-dom";
import "./error.scss";

function Error() {
  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-code">404</div>
        <h1 className="error-title">Utilisateur introuvable</h1>
        <p className="error-message">
          L’utilisateur demandé n’existe pas ou n’est pas autorisé.
        </p>
        <Link to="/user/12" className="error-link">
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}

export default Error;
