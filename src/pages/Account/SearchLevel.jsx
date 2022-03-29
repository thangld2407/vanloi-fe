import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import { searchQuery } from './reducer/Level';

function SearchLevel() {
  const dispatch = useDispatch();
  const onFinish = values => {
    if (values && values.searchQuery?.length) {
      dispatch(searchQuery(values.searchQuery));
    } else {
      dispatch(searchQuery(''));
    }
  };
  return (
    <>
      <span className="search__label">{t('level.search')}</span>
      <Form
        name="search"
        onFinish={onFinish}
        autoComplete="off"
        layout="inline"
        className="flex-nowrap d-flex"
      >
        <Form.Item name="searchQuery" className="search__form-items">
          <Input />
        </Form.Item>

        <Form.Item className="margin-0">
          <Button
            type="primary"
            htmlType="submit"
            icon={<SearchOutlined />}
          ></Button>
        </Form.Item>
      </Form>
    </>
  );
}
export default SearchLevel;
