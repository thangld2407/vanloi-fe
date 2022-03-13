import { Layout, Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { LIST_ROUTES } from '../../constants/route';

const { SubMenu } = Menu;
const { Sider } = Layout;

function Sidebar(props) {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <Sider className="site-layout-background sidebar">
      <Menu
        mode="inline"
        defaultOpenKeys={['setting']}
        selectedKeys={[
          location.pathname.length > 1 ? location.pathname : '/statistic',
        ]}
        className="sidebar__menu"
      >
        {LIST_ROUTES.map(route => {
          const { path, icon, child, title } = route;
          return child.length ? (
            <SubMenu key={title} icon={icon} title={t(`sidebar.${title}`)}>
              {child.map(item => {
                return (
                  <Menu.Item icon={item.icon} key={item.path}>
                    <Link to={item.path}>{t(`sidebar.${item.title}`)}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          ) : (
            <Menu.Item icon={icon} key={path}>
              <Link to={path}>{t(`sidebar.${title}`)}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
}

export default Sidebar;
