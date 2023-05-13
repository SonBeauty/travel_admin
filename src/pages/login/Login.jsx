import "./login.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make API request to login endpoint
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier: username,
          password,
        }
      );

      // Handle successful login
      console.log(response.data); // Display or store the login token or user data

      // Clear form fields and error state
      setUsername("");
      setPassword("");
      navigate("/home");
      setError("");
    } catch (error) {
      // Handle login error
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
