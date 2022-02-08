import React from "react";
import "./Login.css";

function Login() {
  const register = () => {
    return alert("You have been registered.");
  };

  const login = () => {
    return alert("You have been logged in.");
  };

  return (
    <div className="Login">
      <div className="twitter__logo__whole">
        <img
          src={require("./twitter-login.png")}
          alt={require("./twitter-login.png")}
        />
      </div>
      <div className="login__container">
        <div className="login__img">
          <img src="https://img.icons8.com/ios/50/000000/twitter--v2.png" />
        </div>
        <div style={{ fontSize: 75, fontWeight: "bold", marginTop: 50 }}>
          Şu anda olup bitenler
        </div>
        <div
          style={{
            fontSize: 35,
            fontWeight: "bold",
            marginTop: 50,
            marginBottom: 50,
          }}
        >
          Twitter'a bugün katıl.
        </div>
        <div className="register__box">
          <input
            className="register__box__input"
            type="name"
            placeholder="İsim"
          ></input>
          <input
            className="register__box__input"
            type="email"
            placeholder="Mail"
          ></input>
        </div>
        <div className="register__button">
          <button
            style={{
              borderRadius: 25,
              backgroundColor: "#50b7f5",
              width: 300,
              height: 40,
            }}
            onClick={register}
          >
            Register
          </button>
        </div>
        <div className="login__account">Zaten bir hesabın var mı?</div>
        <div className="login__button">
          <button
            style={{
              borderRadius: 25,
              backgroundColor: "#50b7f5",
              textAlign: "center",
              width: 300,
              height: 40,
            }}
            onClick={login}
          >
            Giriş yap
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
