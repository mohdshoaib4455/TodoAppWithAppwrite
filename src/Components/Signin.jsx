import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../store/Context";
import {  useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login, loading, setloading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const submitHandle = async (e) => {
    e.preventDefault();
    setloading(true);
    await login(email, password);
    setloading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form
          onSubmit={submitHandle}
          className="w-sm  border-2 shadow-lg rounded-md px-2 py-8 mx-2  sm:m-0 md:w-md sm:p-10 lg:w-lg xl:w-x"
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-md text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-md text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="bg-purple-500 px-3 sm:px-4 md:px-5 lg:px-6 py-2  rounded text-white font-semibold font-sans cursor-pointer "
          >
            {loading ? "Loading..." : "Log in"}
          </button>
        </form>
      )}
    </>
  );
};

export default Signin;
