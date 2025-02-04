import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/routeConfig/RouteConfig";
import { Suspense } from "react";

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<div>...Loading</div>}>{element}</Suspense>
          }
        />
      ))}
    </Routes>
  );
};
