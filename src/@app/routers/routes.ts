import { ReactNode } from "react";
import AdminLayout from "../components/admin-layout";
import AuthPage from "../pages/AuthPage";
import LoginPage from "../pages/login/LoginPage";
import Meeting from "../pages/Meeting";

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
  },
  {
    component: Meeting,
    path:"/meeting",
    isLayout:true,
    layout:AdminLayout
  }
  
];

export default routes;
