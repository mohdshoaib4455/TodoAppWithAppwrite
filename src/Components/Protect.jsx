import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../store/Context";
import Loading from "./Loading";

const Protect = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default Protect;
