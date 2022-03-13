import { Button, Col, Input, Row, Form } from 'antd';
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import {
//   getRefreshToken,
// } from '../../api/Cookie';
import { useTranslation } from 'react-i18next';

const Login = () => {
  //   const token = getRefreshToken('Refresh-Token');
  //   const dispatch = useDispatch();
  const { t } = useTranslation();
  //   const navi = useNavigate();
  const handleLogin = async value => {
    // try {
    //   const data = {
    //     username: value.username,
    //     password: value.password,
    //   };
    //   const res = await postLogin(data);
    //   if (res.status === 200) {
    //     dispatch(setLogin(res.data.data));
    //     setToken(res.data.data.access_token);
    //     setCookieRefreshToken(res.data.data.refresh_token);
    //     localStorage.setItem('RefreshToken', res.data.data.refresh_token);
    //     message.success(t('login.message.sucess'), 0.1);
    //     navi('/');
    //   } else {
    //     message.warn(res.data.message);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };
  const token = false;
  const redirect = () => {
    if (!token) {
      return (
        <div className="login ">
          <Row
            style={{
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Col sm={12} md={6} lg={6} xl={6}>
              <div className="login--right">
                <div className="login--right__header">
                  {/* <img src={logo} alt="" /> */}
                  <p>{t('login.header')}</p>
                </div>
                <div className="login--right__content">
                  <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    onFinish={handleLogin}
                  >
                    <Form.Item
                      label="Username: "
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: t('login.message-error.username'),
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Password: "
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: t('login.message-error.password'),
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{ offset: 15 }}
                    >
                      <Link to="/forgotpassword">
                        {t('login.forgot-password')}
                      </Link>
                    </Form.Item>
                    <Form.Item>
                      <Button htmlType="submit" type="danger">
                        {t('login.title')}
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      );
    }
    return <Navigate to="/" />;
  };
  return <>{redirect()}</>;
};
export default Login;
