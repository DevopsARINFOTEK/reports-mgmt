import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      console.log("Sending Login Request...");

      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      console.log("Response Status:", response.status);

      const data = await response.json();

      console.log("Response Data:", data);

      if (response.ok && data.success) {
        localStorage.setItem("isLoggedIn", "true");

        alert("Login Successful");

        navigate("/");
      } else {
        alert(data.message || "Invalid Login");
      }
    } catch (error) {
      console.error("Login Error:", error);

      alert(
        `Error: ${
          error.message || "Unable to connect to server"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-96">

        <h1 className="text-3xl font-bold text-center text-[#1e5aa8]">
          AR INFOTEK
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Report Management System
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            className="w-full border p-3 rounded-lg mb-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ff891c] text-white p-3 rounded-lg hover:bg-orange-600 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>
    </div>
  );
}