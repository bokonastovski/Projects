import { Link } from "react-router-dom";
import "../css/components/_ErrorPage.scss";
import MainBtnOrange from "../components/MainBtnOrange";

const ErrorPage: React.FC = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>404</h1>
        <h2>page Not Found</h2>
        <p>sorry, the page you are looking for does not exist.</p>
        <Link to="/">
          <MainBtnOrange text="back home" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
