import React from 'react'
import Link from 'next/link'

import { DatePicker } from 'antd';


import stylesheet from 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';

const Nav = () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["1"]}
                        style={{ lineHeight: '64px' }}
                        breakpoint="lg"
                        collapsedWidth="0"
                    >  
                                <Menu.Item key="1">dsasf</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                                <Menu.Item key="4"><Icon spin={true} type="plus-circle" className="publish-btn" /></Menu.Item>
                                <Menu.Item key="5"><Icon spin={true} type="login" className="loggin-btn" /></Menu.Item>
                    </Menu>
  </div>
)

export default Nav
