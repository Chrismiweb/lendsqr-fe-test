import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();


  navigate("/users"); // ✅ redirect to dashboard
};

  return (
    <div className="login">
      {/* Left */}
      <div className="login__left">
        <div className="login__brand">
          <img src="/images/logo.svg" alt="Lendsqr" />
        </div>

        <div className="login__illustration">
          <img src="/images/login-illustration.svg" alt="Login illustration" />
        </div>
      </div>

      {/* Right */}
      <div className="login__right">
        <form className="login__form" onSubmit={handleLogin}>
          <h1>Welcome!</h1>
          <p>Enter details to login.<br/> This is a demo page, so no input is required.</p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>

          <a className="forgot" href="#">
            FORGOT PASSWORD?
          </a>
`       <button className="login-btn" type="submit"> LOG IN </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
