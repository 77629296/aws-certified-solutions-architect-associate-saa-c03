import { ComponentType, lazy, LazyExoticComponent } from "react";

export interface RouteDef {
  path: string;
  redirect?: string;
  Component?: LazyExoticComponent<ComponentType<any>>;
  routes?: RouteDef[];
  tabRoutes?: RouteDef[];
  exactPath: boolean;
  moduleName?: string;
  moduleClass?: string;
  permission?: boolean;
}

export const Routes: RouteDef[] = [
  {
    path: "/login",
    Component: lazy(() => import("@/components/User/Login")),
    moduleName: "Login",
    moduleClass: "login-page",
    exactPath: true,
  },
]
