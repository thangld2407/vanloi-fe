import {
  CalendarOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const LIST_ROUTES = [
  {
    path: '/statistic',
    title: 'statistic',
    icon: <UserOutlined />,
    child: [],
  },
  {
    path: '/request',
    title: 'request',
    icon: <CalendarOutlined />,
    child: [],
  },

  {
    path: '/setting',
    title: 'setting',
    icon: <NotificationOutlined />,
    child: [
    ],
  },
];
