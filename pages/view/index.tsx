import type { NextPage } from 'next'
import 'antd/dist/antd.css'
import {
  FileOutlined,
  FieldTimeOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { GaugeChart, AreaChart } from '@opd/g2plot-react'
import { Layout, Menu } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'
import type { MenuProps } from 'antd'
import Image from 'next/image'
import carView from '../../assets/img/man-driving-car-from-rear-view.jpg'
import PieChart from './pie'
type MenuItem = Required<MenuProps>['items'][number]
const { Header, Content, Footer, Sider } = Layout

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}
const items: MenuItem[] = [
  // getItem('Option 1', '1', <PieChartOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Meta Data', 'sub1', <FileOutlined />, [
    getItem('Cluster Name', '3'),
    getItem('Time Stamp', '4'),
    getItem('Image URL', '5'),
  ]),
  getItem('Frame', 'sub2', <FieldTimeOutlined />, [
    getItem('Start Frame', '6'),
    getItem('Frame Rate', '8'),
  ]),
  getItem('Source', '9', <UserOutlined />),
]

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`

const View: NextPage = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
        >
          <Logo className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              background: '#fff',
              textAlign: 'center',
              fontSize: '1.5rem',
            }}
          >
            (Prototype) Visualization of File Transfer to Data Lake
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, height: '80vh' }}
            >
              <div style={{ display: 'flex' }}>
                <Image
                  src={carView}
                  alt="car"
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                <div>
                  <PieChart />
                  <GaugeChart percent={0.75}></GaugeChart>
                </div>
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', padding: '0 0 12px' }}>
            ©2022 Created by Net AI Labs.
          </Footer>
        </Layout>
      </Layout>
    </>
  )
}

export default View
