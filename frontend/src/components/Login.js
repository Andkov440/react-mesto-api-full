import React from "react";

export default function Login({ onLogin }) {
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
    if (!email || !password) {
      return;
    }
    onLogin(email, password);
  };

  return (
    <div className="login">
      <p className="login__welcome">Вход</p>
      <form className="login__form" onSubmit={handleSubmit} name="form-login">
        <input
          required
          type="text"
          className="login__input"
          placeholder="Email"
          value={email}
          onChange={handleLoginChange}
        />
        <input
          required
          type="password"
          className="login__input"
          placeholder="Пароль"
          value={password}
          onChange={handleLoginPassword}
        />
          <button type="submit" className="login__button">
            Войти
          </button>
      </form>
    </div>
  );
  }