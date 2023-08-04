import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Layout from "../components/layout/layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="*" element={<h1>404 not found</h1>} />
      {/* Hace algo mas lindo para el error 404 */}
    </Routes>
  );
};

export default AppRouter;
