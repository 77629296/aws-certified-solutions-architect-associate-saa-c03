import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RouteDef } from "./appRoutes";
const NotFoundPage = lazy(() => import("@/components/NotFoundPage"));

export type AppRouteProps = {
  moduleName: string | undefined;
  moduleClass: string;
  innerRoutes: JSX.Element | undefined;
  tabRoutes: JSX.Element | undefined;
  tabRoutesDef: RouteDef[] | undefined;
};

const LazyRouteWrapper: React.FC<{
  route: RouteDef;
}> = ({ route }) => {
  const authenticated = false

  return (
    <Suspense>
      <Route
        path={route.path}
        exact={route.exactPath}
        render={(props) => {
          const { location } = props;

          const nestedRoutes =
            route.routes && routesGenerator(route.routes, route.path);
          const tabRoutes =
            route.tabRoutes && routesGenerator(route.tabRoutes, route.path);

          const appRouteProps: AppRouteProps = {
            moduleName: route.moduleName,
            moduleClass: route.moduleClass || "",
            innerRoutes: nestedRoutes,
            tabRoutes: tabRoutes,
            tabRoutesDef: route.tabRoutes,
          };


          return route.redirect ? (
            <Redirect
              to={{
                pathname: route.redirect,
                search: "",
              }}
            />
          ) : route.permission ? (
            authenticated ? (
              route.Component &&
              React.createElement(route.Component, {
                ...props,
                ...appRouteProps,
              })
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location },
                  search: location.search,
                }}
              />
            )
          ) : (
            route.Component &&
            (authenticated && ["/login", "/signup"].includes(route.path) ? (
              <Redirect
                to={{
                  pathname: "/",
                }}
              />
            ) : (
              <>
                {React.createElement(route.Component, {
                  ...props,
                  ...appRouteProps,
                })}
              </>
            ))
          );
        }}
      />
    </Suspense>
  );
};

export const routesGenerator: (
  routes: RouteDef[],
  path?: string
) => JSX.Element = (routes, path = "/") => {
  return (
    <Switch>
      <Route path={path}>
        {routes.map((route: RouteDef) => (
          <LazyRouteWrapper key={route.path} route={route} />
        ))}
      </Route>
      <Route component={NotFoundPage} />
    </Switch>
  );
};
