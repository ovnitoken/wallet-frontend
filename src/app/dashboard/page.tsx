"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return router.push("/login");

    fetch("process.env.NEXT_PUBLIC_API_URL/profile", {
      headers: { Authorization: "Bearer " + token },
    })
      .then((r) => r.json())
      .then((data) => setEmail(data.email))
      .catch(() => router.push("/login"));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <h1 className="text-2xl">Bienvenido {email}</h1>
    </main>
  );
}
