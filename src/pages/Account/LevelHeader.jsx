import { PlusCircleFilled } from '@ant-design/icons';
import { Button, Drawer, Input, message, Radio, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { setReloadTable, setVisibles } from './reducer/Level';
import { useTranslation } from 'react-i18next';
import { postLevel } from '../../api/level/levelApi';
function LevelHeader() {
  const [form] = Form.useForm();

  const { t } = useTranslation();

  const { visible } = useSelector(state => state.level);
  const dispatch = useDispatch();
  const showDrawer = () => {
    form.resetFields();
    dispatch(setVisibles(true));
  };
  const hanleAddNewLevel = async value => {
    console.log(value);
    await postLevel(value)
      .then(res => {
        if (res.status === 200) {
          dispatch(setReloadTable());
          message.success('Success To Create');
          console.log(res);
          onClose();
        }
      })

      .catch(err => {
        console.log(err);
      });
  };
  const onClose = () => {
    form.resetFields();
    dispatch(setVisibles(false));
  };

  return (
    <div className="level--header">
      <h3>{t('level.title')}</h3>
      <Button type="primary" icon={<PlusCircleFilled />} onClick={showDrawer}>
        {t('level.create-level')}
      </Button>
      <Drawer
        title={t('level.create-level')}
        placement="right"
        visible={visible}
        onClose={onClose}
        zIndex="2000"
      >
        <div className="level--header__content">
          <Form
            onFinish={hanleAddNewLevel}
            layout="vertical"
            name="form_in_modal"
            initialValues={{
              status: '0',
            }}
          >
            <Form.Item
              name="title"
              label={t('level.popup.label.title-level')}
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
              name="description"
              label={t('level.popup.label.description')}
            >
              <TextArea type="textarea" />
            </Form.Item>
            <Form.Item
              name="status"
              className="collection-create-form_last-form-item"
              label={t('level.popup.label.status')}
            >
              <Radio.Group>
                <Radio value="0">{t('level.popup.button.deny')}</Radio>
                <Radio value="1">{t('level.popup.button.approve')}</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item className="custom-button">
              <Button type="primary" htmlType="submit">
                {t('level.popup.button.create')}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Drawer>
    </div>
  );
}
export default LevelHeader;
