import {
  Badge,
  Table,
  Tag,
  Button,
  Select,
  Row,
  Col,
  Modal,
  Radio,
  Form,
  Input,
  Drawer,
} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Option } from 'antd/lib/mentions';
import { useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { t } from 'i18next';

const TimeSheetTableControl = props => {
  const [visible, setvisible] = useState(false);

  const showModal = () => {
    setvisible(true);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    setvisible(false);
  };
  function handleChange() {
    console.log('Change');
  }
  return (
    <div
      className="timesheet-actions"
      style={{
        marginBottom: '20px',
      }}
    >
      <Row justify="space-between">
        <h1>Account Management</h1>
        <Button type="primary" onClick={showModal}>
          Create A New Account
        </Button>
      </Row>
      <Row justify="space-evenly">
        <Col span={8} style={{ marginRight: '20px', alignItems: 'center' }}>
          <label>Role</label>
          <Select
            style={{
              width: '100%',
            }}
            defaultValue="jack"
            onChange={handleChange}
          >
            <Option value="jack">Select your options</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
        <Col></Col>
        <Col span={8}>
          <label htmlFor="">Status</label>
          <Select
            style={{
              width: '100%',
            }}
            defaultValue="null"
            onChange={handleChange}
          >
            <Option value="null">Select your options</Option>

            <Option value="jack">Active</Option>
            <Option value="lucy">None Active</Option>
          </Select>
        </Col>
      </Row>
      <Drawer
        title={t('level.create-level')}
        placement="right"
        visible={visible}
        onClose={handleCancel}
        zIndex="2000"
      >
        <div className="level--header__content">
          <Form
            // onFinish={hanleAddNewLevel}
            layout="vertical"
            name="form_in_modal"
            initialValues={{
              status: '0',
            }}
          >
            <Form.Item
              name="title"
              label={t('Email')}
              rules={[
                {
                  required: true,
                  message: t('level.message.name-level'),
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="title"
              label={t('Email')}
              rules={[
                {
                  required: true,
                  message: t('level.message.name-level'),
                },
              ]}
            >
              <Select defaultValue="lucy" style={{ width: '100%' }}>
                <Option value="lucy">Admin</Option>
                <Option value="lucy">Customer</Option>
              </Select>
            </Form.Item>
            <Form.Item name="description" label={t('Description')}>
              <TextArea type="textarea" />
            </Form.Item>
            <Form.Item
              name="status"
              className="collection-create-form_last-form-item"
              label={t('Status')}
            >
              <Radio.Group>
                <Radio value="0">{t('Active')}</Radio>
                <Radio value="1">{t('Deny')}</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item className="custom-button">
              <Button type="primary" htmlType="submit">
                {t('Create')}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Drawer>
    </div>
  );
};

export default TimeSheetTableControl;
