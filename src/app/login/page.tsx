"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin() {
    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) return alert("Login incorrecto");

    const data = await res.json();
    localStorage.setItem("token", data.token);
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl text-center font-bold">Login OVNI</h1>

        <input
          className="w-full p-2 rounded bg-gray-800"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-2 rounded bg-gray-800"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 py-2 rounded"
        >
          Entrar
        </button>
      </div>
    </main>
  );
}
