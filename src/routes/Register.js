const ROUTES = [];

export function registerRoute(route) {
  ROUTES.push(route);
}

export function registerRoutes(routes) {
  routes.forEach(registerRoute);
}

export function getRoutes() {
  return ROUTES;
}
