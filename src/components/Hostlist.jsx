import React from "react";
import { connect } from "react-redux";

import { Table } from 'antd';

const columns = [
  {
    title: '运行服务',
    dataIndex: 'address',
    filters: [
      { text: 'London', value: 'London', },
      { text: 'New York', value: 'New York', }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    // sorter: (a, b) => a.address.length - b.address.length,
    // sortDirections: ['descend', 'ascend'],
  },
  {
    title: '主机名称',
    dataIndex: 'name',
    // filters: [
    //   { text: 'Joe', value: 'Joe', },
    //   { text: 'Jim', value: 'Jim', },
    //   { text: 'Submenu', value: 'Submenu', children: [{ text: 'Green', value: 'Green', }, { text: 'Black', value: 'Black', }], }
    // ],
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'CPU核心数',
    dataIndex: 'cpu',
    // defaultSortOrder: 'descend',
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: '内存大小',
    dataIndex: 'mem',
    // defaultSortOrder: 'descend',
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: '数据盘',
    dataIndex: 'disk',
    // defaultSortOrder: 'descend',
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'IP地址',
    dataIndex: 'ipaddr',
    // defaultSortOrder: 'descend',
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.age - b.age,
  },
];

const data = [
  { key: '1', name: 'fudao-webserver-01', disk: "2T", address: 'connector', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '2', name: 'fudao-webserver-02', disk: "2T", address: 'pushserver', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '3', name: 'fudao-webserver-03', disk: "2T", address: 'groupserver', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '4', name: 'fudao-webserver-04', disk: "2T", address: 'fachserver', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '5', name: 'fudao-webserver-05', disk: "2T", address: 'cassandra', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '6', name: 'fudao-webserver-06', disk: "2T", address: 'websocket', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '7', name: 'fudao-webserver-07', disk: "2T", address: 'destserver', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '8', name: 'fudao-webserver-8', disk: "2T", address: 'imserver', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '9', name: 'fudao-webserver-9', disk: "2T", address: 'groupserver', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '10', name: 'fudao-webserver-10', disk: "2T", address: 'pushserver', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '11', name: 'fudao-webserver-11', disk: "2T", address: 'cassandra', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '12', name: 'fudao-webserver-12', disk: "2T", address: 'imserver', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '13', name: 'fudao-webserver-13', disk: "2T", address: 'connector', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '14', name: 'fudao-webserver-14', disk: "2T", address: 'apiserver', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '15', name: 'fudao-webserver-15', disk: "2T", address: 'apiserver', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '16', name: 'fudao-webserver-16', disk: "2T", address: 'handerserver', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
  { key: '17', name: 'fudao-webserver-17', disk: "2T", address: 'handerserver', 'cpu':8, 'ipaddr': '172.16.10.1','mem':65535 },
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

class Hostlist extends React.Component {
  constructor({ dispatch }) {
    super();
  }
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} onChange={onChange} size="middle" />
      </div>
    )
  }
}

export default connect(
  (state) => (
    {
      state: state
    }
  )
)(Hostlist);