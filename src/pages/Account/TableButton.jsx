import Icon, {
  EyeInvisibleOutlined,
  EyeOutlined,
  FullscreenOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';

const TableButton = () => {
  const visible = true;
  return (
    <>
      <div className="level--actions">
        <Button icon={<UploadOutlined />}></Button>
        <Button
          icon={visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        ></Button>
        <Button icon={<FullscreenOutlined />}></Button>
      </div>
    </>
  );
};

export default TableButton;
