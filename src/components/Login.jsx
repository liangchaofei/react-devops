import React from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox, } from 'antd';
import { login } from "../actions/actions.jsx";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor({ dispatch }) {
    super();
    this.handleSubmit = (e) => {
      // 阻止默认动作
      e.preventDefault();
      this.props.form.validateFields((error, values) => {
        if (!error) {
          this.props.dispatch.call(this,login(values))
        }
      });
    }
  }

  render() {
    console.log("当前登录？", this.props.state.login.Online)
    if (this.props.state.login.Online) {
      return <Redirect to={{ pathname: "/home" }} />
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="caption">
          <h1 style={{ "fontSize": "40px", "color": "#fff" }}>资产管理系统</h1>
          <p style={{ "fontSize": "15px", "color": "#fff", "margin": "10px" }}>可视化的主机数据</p>
          <p style={{ "fontSize": "15px", "color": "#fff", "margin": "10px" }}>灵活的 API 可供消费</p>
          <p style={{ "fontSize": "15px", "color": "#fff", "margin": "10px" }}>以后可能能加基础监控、DNS、等</p>
        </div>

        <div className="frame">
          <div className="form">
            <h4 style={{ "textAlign": "center", "marginBottom": "20px" }}>登录</h4>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入您的用户名！' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入您的密码！' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                )}
              </Form.Item>
              <Form.Item>
                {/* {getFieldDecorator('remember', { valuePropName: 'checked', initialValue: false, })(<Checkbox>记住我</Checkbox>)} */}
                {/* <a className="login-form-forgot" href="">忘记密码</a> */}
                {/* <a href="">现在注册</a> */}
                <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        <div className="footer">
          <p>杨金恒 © 2018 版权所有</p>
        </div>
      </div>
    );
  }
}

const Login_Page = Form.create({ name: 'normal_login' })(Login);

export default connect(
  (state) => (
    {
      state: state
    }
  )
)(Login_Page);