import {
  CheckCircleFilled,
  CloseCircleFilled,
  EllipsisOutlined,
} from '@ant-design/icons';
import { Button, message, Popconfirm, Popover, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLevel, getLevel } from '../../api/level/levelApi';
import TableButton from './TableButton';
import { pageSizeOptions } from '../../constants';
import { t } from 'i18next';
import { setReloadTable } from './reducer/Level';

function LevelContent() {
  const { searchQuery, reloadTable } = useSelector(state => state.level);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [dataTable, setDataTable] = useState([]);
  const [loadingTable, setLoadingTable] = useState(false);
  const dispatch = useDispatch();
  const Content = props => (
    <Space size={'middle'} direction="vertical">
      <Button
        onClick={() => {
          props.showModal(props.record);
        }}
      >
        {t('level.edit')}
      </Button>
      <Popconfirm
        title="Are you sure?"
        okText="yes"
        cancelText="no"
        onConfirm={() => {
          props.handleDeleteLevel(props.record);
        }}
      >
        <Button>{t('level.delete')}</Button>
      </Popconfirm>
    </Space>
  );

  const columns = [
    {
      title: t('level.column.ID'),
      dataIndex: 'id',
      sortDirections: 'ascend',
      align: 'center',
      width: '5%',
    },
    {
      title: t('level.column.title'),
      dataIndex: 'title',
      width: '27%',
    },
    {
      title: t('level.column.description'),
      dataIndex: 'description',
    },
    {
      title: t('level.column.status'),
      dataIndex: 'status',
      width: '10%',
      align: 'center',
      render: dataIndex => {
        if (dataIndex === 1) {
          return (
            <>
              <CheckCircleFilled style={{ color: '#78BE20', fontSize: 24 }} />
            </>
          );
        } else {
          return (
            <>
              <CloseCircleFilled style={{ color: '#F94144', fontSize: 24 }} />
            </>
          );
        }
      },
    },
    {
      title: t('level.column.action'),
      dataIndex: 'action',
      key: 'action',
      width: '10%',
      align: 'center',

      render: (text, record) => {
        return (
          <>
            <Popover
              placement="bottom"
              trigger="click"
              content={
                <Content
                  record={record}
                  handleDeleteLevel={handleDeleteLevel}
                />
              }
            >
              <EllipsisOutlined
                style={{ fontSize: 28, fontWeight: 'bolder' }}
              />
            </Popover>
          </>
        );
      },
    },
  ];
  const fetchData = async () => {
    try {
      setLoadingTable(true);
      const res = await getLevel({
        key: searchQuery,
        limit: pageSize,
        page: current,
      });
      if (res.status === 200) {
        setDataTable(res.data.data);
        setTotal(res.data.total);
        setLoadingTable(false);
      }
    } catch (err) {
      setLoadingTable(false);
      message.error(err.message);
    }
  };
  const onPageChange = values => {
    setCurrent(values);
  };
  const showSizeChange = (page, size) => {
    setCurrent(page);
    setPageSize(size);
  };

  const handleDeleteLevel = async record => {
    const res = await deleteLevel(record.id);
    if (res.status === 200) {
      dispatch(setReloadTable());
      message.success(res.data.status);
    } else {
      message.error(res.data.message);
    }
  };

  const [level, setLevel] = useState([]);
  const fetchLevel = async () => {
    try {
      const res = await getLevel();
      setLevel(res.data.data);
    } catch (e) {
      message.error(e.message);
    }
  };
  useEffect(() => {
    fetchLevel();
  }, []);
  useEffect(() => {
    setCurrent(1);
  }, [searchQuery]);

  useEffect(() => {
    setLoadingTable(true);
    fetchData();
  }, [searchQuery, current, pageSize, reloadTable]);
  return (
    <>
      <div className="level--table">
        <TableButton />
        <Table
          columns={columns}
          align="center"
          dataSource={dataTable}
          loading={loadingTable}
          rowKey="id"
          pagination={{
            total: total,
            pageSize: pageSize,
            showQuickJumper: true,
            size: 'default',
            current: current,
            onChange: onPageChange,
            pageSizeOptions: pageSizeOptions,
            showSizeChanger: true,
            onShowSizeChange: showSizeChange,
          }}
          scroll={{ y: 900 }}
        />
      </div>
    </>
  );
}

export default LevelContent;
