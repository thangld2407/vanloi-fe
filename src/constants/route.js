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
    path: '/plan',
    title: 'plan',
    icon: <UserOutlined />,
    child: [],
  },
  {
    path: '/cv-managerment',
    title: 'cv-managerment',
    icon: <UserOutlined />,
    child: [],
  },
  {
    path: '/setting',
    title: 'setting',
    icon: <NotificationOutlined />,
    child: [
      {
        path: '/setting/common',
        title: 'common',
        icon: '',
        child: [],
      },
      {
        path: '/setting/position',
        title: 'position',
        icon: '',
        child: [],
      },
      {
        path: '/setting/level',
        title: 'level',
        icon: '',
        child: [],
      },
      {
        path: '/setting/language',
        title: 'language',
        icon: '',
        child: [],
      },
      {
        path: '/setting/cv-resource',
        title: 'cv-resource',
        icon: '',
        child: [],
      },
      {
        path: '/setting/user',
        title: 'user',
        icon: '',
        child: [],
      },
      {
        path: '/setting/role',
        title: 'role',
        icon: '',
        child: [],
      },
    ],
  },
];
