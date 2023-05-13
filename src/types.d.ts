type RouteType = {
  path: string;
  component: () => JSX.Element;
};

type RoutesType = RouteType[];
