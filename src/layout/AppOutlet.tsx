import { Outlet } from "react-router-dom";
import AuthGaurd from "./guard/AuthGuard";
import DashboardLayout from "./DashboardLayout";

const AppOutlet = () => {
  return (
    <AuthGaurd>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AuthGaurd>
  );
};

export default AppOutlet;
