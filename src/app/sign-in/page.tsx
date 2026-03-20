"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="max-w-md mx-auto px-5 py-24 text-center">
      <h2>Sign In</h2>
      <p className="text-gray-100 mb-8">
        Sign in to save your favourites, upload to your plant gallery, and store
        your recommendations.
      </p>
      <button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        className="px-6 py-3 bg-white text-gray-800 font-medium rounded-full hover:scale-105 transition-all"
      >
        Continue with GitHub
      </button>
    </div>
  );
}
