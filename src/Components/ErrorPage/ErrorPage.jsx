import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>Opps!</h2>
      <NavLink to={'/'}><button>Home</button></NavLink>
    </div>
  );
};

export default ErrorPage;