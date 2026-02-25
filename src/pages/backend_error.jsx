import { Link } from "react-router-dom";
import "./backend_error.scss";

function BackendError() {
  return (
    <div className="backend-error">
      <div className="backend-error__container">
        <h1 className="backend-error__code">500</h1>
        <h2 className="backend-error__title">
          Serveur temporairement indisponible
        </h2>
        <p className="backend-error__message">
          Nous rencontrons actuellement un problème technique. Veuillez
          réessayer plus tard.
        </p>

        <Link to="/user/12" className="backend-error__button">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

export default BackendError;
