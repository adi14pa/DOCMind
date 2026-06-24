import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
      method: "POST",

      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      window.location.href = "/";
    } else {
      alert(data.error);
    }
  };

  const handleRegister = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/register`,
      {
        method: "POST",

        credentials: "include",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password,
        }),
      },
    );

    const data = await res.json();

    if (res.ok) {
      window.location.href = "/";
    } else {
      alert(data.error);
    }
  };
return (
  <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f1117",
    }}
  >

    <div
      style={{
        width:"350px",
        display:"flex",
        flexDirection:"column",
        gap:"15px",
        padding:"30px",
        borderRadius:"10px",
        background:"#181b23"
      }}
    >

      <h1 style={{color:"white"}}>
        DocMind Auth
      </h1>


      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />


      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />


      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />


      <button onClick={handleLogin}>
        Login
      </button>


      <button onClick={handleRegister}>
        Register
      </button>


    </div>

  </div>
);
}

export default Login
