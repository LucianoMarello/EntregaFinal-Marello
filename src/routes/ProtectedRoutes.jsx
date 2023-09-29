import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoutes = () => {
  const { isAdmin } = useContext(AuthContext);
  return <div>{isAdmin ? <Outlet /> : <Navigate to={"/"} />}</div>;
};

export default ProtectedRoutes;
