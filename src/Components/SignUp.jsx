import React, { useContext, useState } from "react";
import AuthContext from "../store/Context";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const SignUp = () => {
  const { SignUp, setloading, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const submithandle = async (e) => {
    setloading(true);
    e.preventDefault();
    await SignUp(form.name, form.email, form.password);
    navigate("/signin");
    setloading(false);
  };

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <form
          onSubmit={submithandle}
          className="w-sm p-10 md:w-md sm:p-10 border-2  rounded-md lg:w-lg xl:w-x"
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              disabled={loading}
              type="text"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-md text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              disabled={loading}
              type="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
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
              disabled={loading}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
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
          <button className="bg-purple-400 px-3 sm:px-4 md:px-5 lg:px-6 py-2  rounded text-white font-semibold font-sans cursor-pointer ">
            Sign up
          </button>
        </form>
      )}
    </>
  );
};

export default SignUp;
