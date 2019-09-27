import styles from './index.css';
import { Layout, Menu } from "antd";
import Link from "umi/link";
import React, { Component } from "react";

const { Header, Content } = Layout;

export default class extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const selectedKeys = [this.props.location.pathname];
    return (
      <Layout className={styles.app}>
        <Header className={styles.header}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={selectedKeys}
            style={{ lineHeight: "64px", float: "left" }}
          >
            <Menu.Item key="/">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="/designer">
              <Link to="/designer">设计师</Link>
            </Menu.Item>
            <Menu.Item key="/case">
              <Link to="/case">艺术集</Link>
            </Menu.Item>
            <Menu.Item key="/models">
              <Link to="/models">模型库</Link>
            </Menu.Item>
            <Menu.Item key="/mobil">
              <Link to="/mobil">移动端</Link>
            </Menu.Item>
          </Menu>
        </Header>
        {/* 内容 */}
        <Content className='global_container'>
          <div className={styles.box}>{this.props.children}</div>
        </Content>
        {/* <Footer className={styles.footer}>Footer</Footer> */}
      </Layout>
    );
  }
}
