import React from "react";
import { connect } from "react-redux";

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Home extends React.Component {
  constructor({ dispatch }) {
    super();
  }

  render() {
    return (
      <Layout id="main" style={{ minHeight: '100vh' }}>
        <Sider >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item >
              <span>个人中心</span>
            </Menu.Item>
            <Menu.Item >
              <span>资产概况</span>
            </Menu.Item>
            <SubMenu title={<span><span>资产管理</span></span>}>
              <Menu.Item>云主机</Menu.Item>
              <Menu.Item>云物理机</Menu.Item>
              <Menu.Item>变更管理</Menu.Item>
            </SubMenu>
            <SubMenu title={<span><span>组织管理</span></span>}>
              <Menu.Item>成本管理</Menu.Item>
              <Menu.Item>部门管理</Menu.Item>
              <Menu.Item>人员管理</Menu.Item>
            </SubMenu>
            <SubMenu title={<span><span>消费接口</span></span>}>
              <Menu.Item>Ansible</Menu.Item>
              <Menu.Item>Jenkins</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>资产管理</Breadcrumb.Item>
              <Breadcrumb.Item>云主机</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>这里是正文</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}> Ant Design ©2018 Created by Ant UED </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect(
  (state) => (
    {
      state: state
    }
  )
)(Home);