import { Table } from 'antd';

const DataTable = props => {
  const { columns, value } = props;
  return (
    <div className="timesheet-datatable">
      <Table columns={columns} dataSource={value} />
    </div>
  );
};

export default DataTable;
