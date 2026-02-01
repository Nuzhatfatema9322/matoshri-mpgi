import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", { //request to backend
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      // ✅ save token dashboard page open
      localStorage.setItem("token", data.token);

      // ✅ redirect
      navigate("/dashboard");
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <>
       <header className="dash-header">
           <div className="dash-header-container">
             <img
           src={logo}
           className="logo"
           alt="logo"
           style={{ cursor: "pointer" }}
           onClick={() => navigate("/")}
         />
             <h1>Matoshri Pratishthan Group of Institutions, Nanded</h1>
           </div>
         </header>

      <div className="login-page">
        <div className="login-box">
          <div className="login-top">
            <h2>Admin Portal</h2>
            <p>Sign in to your dashboard</p>
          </div>

          <div className="login-body">
            <label>Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Sign In</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
