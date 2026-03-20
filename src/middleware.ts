export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: ["/favorites/:path*", "/gallery/:path*", "/profile/:path*"],
};
