import React, { useContext } from "react";
import AuthContext from "../store/Context";

import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout, loading, setloading } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();
  const LogOutBtn = () => {
    setloading(true);
    logout();

    navigate("/");
    setloading(false);
  };
  return (
    <>
      <div className="w-full h-20 bg-purple-500 flex justify-between items-center px-3 sm:px-4 md:px-8 lg:px-16 xl:px-32">
        <Link to={"/"}>
          <h2 className="text-white font-bold text-3xl font-sans cursor-pointer">
            Todo
          </h2>
        </Link>

        <div className="flex justify-between gap-2">
          {user && (
            <button
              onClick={LogOutBtn}
              disabled={loading}
              className="bg-gray-100 px-3 sm:px-4 md:px-5 lg:px-6 py-2  rounded text-black font-semibold font-sans cursor-pointer "
            >
              {loading ? "Loading ..." : "Log out"}
            </button>
          )}
          {!user && (
            <>
              {location.pathname !== "/signup" && (
                <Link to={"/signup"}>
                  <button className="bg-white px-3 sm:px-4 md:px-5 lg:px-6 py-2  rounded text-black font-semibold font-sans cursor-pointer ">
                    Sign up
                  </button>
                </Link>
              )}
              {location.pathname !== "/signin" && (
                <Link to={"/signin"}>
                  <button className="bg-white px-3 sm:px-4 md:px-5 lg:px-6 py-2  rounded text-black font-semibold font-sans cursor-pointer ">
                    Sign in
                  </button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
