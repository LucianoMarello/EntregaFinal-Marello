import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Layout from "../components/layout/layout/Layout";
import DashboardContainer from "../components/pages/dashboard/DashboardContainer";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashboardContainer />} />
      </Route>
      <Route path="*" element={<h1>404 not found</h1>} />
      {/* Hace algo mas lindo para el error 404 */}
    </Routes>
  );
};

export default AppRouter;
