import type { NextPage } from "next";
import "antd/dist/antd.css";
import {
  FileOutlined,
  FieldTimeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import { useState } from "react";
import styled from "styled-components";
import Grid from "../components/Grid";

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`;

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  // getItem('Option 1', '1', <PieChartOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  getItem("Meta Data", "sub1", <FileOutlined />, [
    getItem("Cluster Name", "3"),
    getItem("Time Stamp", "4"),
    getItem("Image URL", "5"),
  ]),
  getItem("Frame", "sub2", <FieldTimeOutlined />, [
    getItem("Start Frame", "6"),
    getItem("Frame Rate", "8"),
  ]),
  getItem("Source", "9", <UserOutlined />),
];

const Home: NextPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Logo className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              background: "#fff",
              textAlign: "center",
              fontSize: "1.5rem",
            }}
          >
            (Prototype) Visualization of File Transfer to Data Lake
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, height: "80vh" }}
            >
              <Grid />
            </div>
          </Content>
          <Footer style={{ textAlign: "center", padding: "0 0 12px" }}>
            ©2022 Created by Net AI Labs.
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
