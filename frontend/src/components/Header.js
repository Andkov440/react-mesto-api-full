import logo from "../img/logo.svg";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <img className="header__image" src={logo} alt="Лого" />
      <nav className="header__auth">
        <p className="header__text">{props.mail}</p>
        <Link
          to={props.route}
          className="header__link"
          type="button"
          onClick={props.onClick}
        >
          {props.title}
        </Link>
      </nav>
    </header>
  );
}
