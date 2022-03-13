import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Layout className="site-layout-background">
          <Sidebar />
          <Content className="main__content">
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default MainLayout;
