import { CalendarOutlined, UserOutlined } from '@ant-design/icons';

export const LIST_ROUTES = [
  {
    path: '/dashboard',
    title: 'dashboard',
    icon: <UserOutlined />,
    child: [],
  },
  {
    path: '/timesheet',
    title: 'timesheet',
    icon: <CalendarOutlined />,
    child: [],
  },
  {
    path: '/account',
    title: 'account',
    icon: <CalendarOutlined />,
    child: [],
  },
];
