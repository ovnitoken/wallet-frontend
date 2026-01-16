"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md text-center space-y-6">
        <Image
          src="/ovni.png"
          alt="OVNI"
          width={120}
          height={120}
          className="mx-auto"
        />

        <h1 className="text-3xl font-bold">OVNI Wallet</h1>
        <p className="text-gray-400">Wallet profesional</p>

        <div className="space-y-3">
          <Link
            href="/login"
            className="block bg-blue-600 py-2 rounded-lg hover:bg-blue-700"
          >
            Iniciar sesión
          </Link>

          <Link
            href="/register"
            className="block border border-gray-600 py-2 rounded-lg hover:bg-gray-800"
          >
            Crear cuenta OVNI
          </Link>
        </div>
      </div>
    </div>
  );
}
