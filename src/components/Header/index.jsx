import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Button, Layout, Popover } from 'antd';
import { t } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';
const content = <Button>Logout</Button>;

const Header = () => {
  const { Header } = Layout;
  return (
    <Header className="header">
      <div className="header__logo">
        <Link to="/">
          <span>{t('header.title')}</span>
        </Link>
      </div>
      <div className="header__add">
        <div className="header__add--actions">
          <a href="#!">{/* <img src={SearchIcon} alt="SearchIcon" /> */}</a>
          <a href="#!">{/* <img src={QuestionIcon} alt="QuestionIcon" /> */}</a>

          <a href="#!">
            <Badge count={10} overflowCount={9} size="default" offset={[5]}>
              <BellOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </Badge>
          </a>
        </div>
        <div className="header__add--user user">
          <Popover content={content}>
            <a className="user__info" href="#!">
              <UserOutlined />
              <span>Thang Le Dinh</span>
            </a>
          </Popover>
        </div>
      </div>
    </Header>
  );
};

export default Header;
