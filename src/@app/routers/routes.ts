import { ReactNode } from "react";
import AdminLayout from "../components/admin-layout";
import AuthPage from "../pages/AuthPage";
import LoginPage from "../pages/login/LoginPage";

interface Route {
  component: React.FC;
  layout?: React.FC<{ children: ReactNode }>;
  path: string;
  isLayout: boolean;
}
const routes: Route[] = [
  {
    component: AuthPage,
    path: "/",
    isLayout:true,
    layout:AdminLayout
  },
  {
    component: LoginPage,
    path:"/login",
    isLayout:false,
  }
  
];

export default routes;
