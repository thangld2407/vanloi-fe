import { Layout } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const { Content } = Layout;

const MainLayout = () => {
  const token = true;

  const redirect = () => {
    if (token) {
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
    }
    return <Navigate to="/login" />;
  };
  return <>{redirect()}</>;
};

export default MainLayout;
