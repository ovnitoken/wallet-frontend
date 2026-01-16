"use client";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Iniciar sesión</h1>

        <input
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-900 border border-gray-700"
        />

        <input
          placeholder="Contraseña"
          type="password"
          className="w-full p-2 rounded bg-gray-900 border border-gray-700"
        />

        <button className="w-full bg-blue-600 py-2 rounded">
          Entrar
        </button>
      </div>
    </div>
  );
}
