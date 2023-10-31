// import store from "./store/store";
import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const isLoggedIn = localStorage.getItem("userId");
  // const state = store.getState();
  // const isLoggedIn = state.auth.isLoggedIn;

  if (!isLoggedIn) {
    throw redirect("/login");
  } else {
    return true;
  }
}
