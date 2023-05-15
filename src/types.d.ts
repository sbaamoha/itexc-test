type RouteType = {
  path: string;
  component: () => JSX.Element;
};

type RoutesType = RouteType[];

interface Appointment {
  id: string;
  name: string;
  avatar: string;
  date: string;
  accepted: boolean;
  desc: string;
}

interface TDashboardContent {
  appointments: Appointment[];
}

interface Message {
  name: string;
  avatar: string;
  message: string;
  conversation: string[];
  date: string;
  id: string;
}
