import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/store";
import { useNavigate } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email_, setEmail] = useState("");
  const [password_, setPassword] = useState("");

  const login = async () => {
    await axios
      .post("http://localhost:4000/api/users/login", {
        email: email_,
        password: password_,
      })
      .then((res) => {
        localStorage.setItem("userId", res.data.user._id);
        console.log(res.data);
      })
      .then(() => dispatch(authActions.login()))
      .then(() => navigate("/profile"))
      .catch((e) => console.log(e));
  };
  const t = (e) => {
    e.preventDefault();
    console.log();

    login();
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="mr-36">
        <h1 className="text-black text-3xl font-extrabold text-center ml-12">
          Login
        </h1>
        <form onSubmit={t} className="flex flex-col ">
          <input
            type="email"
            value={email_}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[120%] m-3 h-10 rounded-xl border-[1px] p-2 text-center border-black"
            placeholder="Enter the Email"
          />
          <input
            type="password"
            value={password_}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[120%] m-3 h-10 rounded-xl border-[1px] p-2 text-center border-black"
            placeholder="Enter the Password"
          />
          <button
            type="submit"
            className="ml-12 w-[200px] inline-block px-5 py-2 mt-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 "
          >
            Proceed
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
