import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Tag } from 'antd';
import DataTable from './DataTable';
import TimeSheetTableControl from './TimesheetTableControl';

const TimeSheet = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'date',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Account',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: 'Roles',
      dataIndex: 'module',
      key: 'module',
    },
    {
      title: 'Descriptions',
      dataIndex: 'task',
      key: 'task',
    },
    {
      title: 'Create At',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'worked',
      key: 'worked',
      render: text => (
        <Tag color="volcano" key={text}>
          {text}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      render: () => {
        return (
          <div className="button">
            <Button type="primary">
              <EditOutlined />
            </Button>
            <Button type="primary" danger>
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];
  const data = [
    {
      key: 1,
      id: '1',
      date: '27/09/2000',
      project: 'vanloifee@gmail.com',
      module: 'Admin',
      task: 'No Descriptions',
      time: 1,
      worked: 'Active',
    },
    {
      id: '1',
      key: 1,
      date: '20/09/2000',
      project: 'vanloifee@gmail.com',
      module: 'Admin',
      task: 'No Descriptions',
      time: 1,
      worked: 'Active',
    },
    {
      id: '1',
      key: 1,
      date: '21/09/2000',
      project: 'vanloifee@gmail.com',
      module: 'Admin',
      task: 'No Descriptions',
      time: 1,
      worked: 'Active',
    },
    {
      id: '1',
      key: 1,
      date: '25/09/2000',
      project: 'vanloifee@gmail.com',
      module: 'Admin',
      task: 'No Descriptions',
      time: 1,
      worked: 'Active',
    },
    {
      id: '1',
      key: 1,
      date: '29/09/2000',
      project: 'vanloifee@gmail.com',
      module: 'Admin',
      task: 'No Descriptions',
      time: 1,
      worked: 'Active',
    },
    {
      id: '1',
      key: 1,
      date: '23/09/2000',
      project: 'vanloifee@gmail.com',
      module: 'Admin',
      task: 'No Descriptions',
      time: 1,
      worked: 'Active',
    },
  ];
  return (
    <>
      <div className="timesheet">
        <TimeSheetTableControl />
        <DataTable columns={columns} value={data} />
      </div>
    </>
  );
};

export default TimeSheet;
