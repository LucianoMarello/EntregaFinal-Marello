import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/layout/navbar/Navbar";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
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
