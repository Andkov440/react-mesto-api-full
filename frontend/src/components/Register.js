import React from "react";
import { Link } from "react-router-dom";

export default function Register({ onRegister }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLoginChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handleLoginPassword = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(email, password);
  };

  return (
    <div className="login">
      <p className="login__welcome">Регистрация</p>
      <form
        className="login__form"
        onSubmit={handleSubmit}
        name="form-register"
      >
        <input
          className="login__input"
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={handleLoginChange}
        />
        <input
          className="login__input"
          required
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handleLoginPassword}
        />
        <button type="submit" className="login__button">
          Зарегистрироваться
        </button>
      </form>
      <Link to="/singin" className="login__link">
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}
