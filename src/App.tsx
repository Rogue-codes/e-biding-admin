import { Navigate, Route, Routes } from "react-router-dom";
import AppWrapper from "./layout/AppWrapper";
import AppOutlet from "./layout/AppOutlet";
import { paths } from "./routes/paths";
import routes from "./routes";
import { Suspense } from "react";
import PreLoader from "./components/PreLoader";
import PublicOutlet from "./layout/guard/PublicRoute/PublicOutlet";
import Login from "./views/auth/Login";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route element={<AppOutlet />}>
          <Route index element={<Navigate to={paths.ACCOUNTMANAGEMENT} />} />
          {routes.map(({ component: Component, path }) => (
            <Route
              path={path}
              key={path}
              element={
                <Suspense fallback={<PreLoader />}>
                  <Component />
                </Suspense>
              }
            />
          ))}
        </Route>

        <Route element={<PublicOutlet />}>
          <Route index element={<Navigate to={paths.LOGIN} />} />
          <Route
            path={paths.LOGIN}
            element={
              <Suspense fallback={<PreLoader />}>
                <Login />
              </Suspense>
            }
          />
        </Route>

        {/* <Route index element={<NoMatch />} /> */}
      </Routes>
      <Footer/>
    </AppWrapper>
  );
}
