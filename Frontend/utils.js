import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const isLoggedIn = localStorage.getItem("userId");

  if (!isLoggedIn) {
    throw redirect("/login");
  } else {
    return true;
  }
}
