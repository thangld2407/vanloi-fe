import { Badge, Button, Layout, Popover } from 'antd';
import { t } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const content = <Button>Logout</Button>;

const Header = () => {
  const { Header } = Layout;
  return (
    <Header className="header">
      <div className="header__logo">
        <Link to="/">
          {/* <img src={logo} alt="logo" /> */}
          <span>{t('header.hrtool')}</span>
        </Link>
      </div>
      <div className="header__add">
        <div className="header__add--actions">
          <a href="#!">{/* <img src={SearchIcon} alt="SearchIcon" /> */}</a>
          <a href="#!">{/* <img src={QuestionIcon} alt="QuestionIcon" /> */}</a>

          <a href="#!">
            <Badge count={10} overflowCount={9} size="default" offset={[5]}>
              {/* <img src={BellIcon} alt="BellIcon" /> */}
            </Badge>
          </a>
        </div>
        <div className="header__add--user user">
          <Popover content={content}>
            <a className="user__info" href="#!">
              {/* <img src={UserIcon} alt="UserIcon" /> */}
              <span>Thang Le Dinh</span>
            </a>
          </Popover>
        </div>
      </div>
    </Header>
  );
};

export default Header;
