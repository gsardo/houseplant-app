"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export function SignInButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-white text-sm">{session.user?.name}</span>
        <button
          onClick={() => signOut()}
          className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20 hover:bg-white/20 transition-all"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("github")}
      className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20 hover:bg-white/20 transition-all"
    >
      Sign In
    </button>
  );
}
