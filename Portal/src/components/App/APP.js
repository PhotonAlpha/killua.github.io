import React, {Component} from 'react';

import Nav from 'components/Nav/Nav';
import getRouter from 'router/router';

import { Layout, Breadcrumb } from 'antd';
import './APP.css';
import image from 'assets/github-for-atom.png';

const { Header, Content, Footer } = Layout;

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', width: '100%' }}>
                    <div className="logo" ></div>
                    {/* <img src={image}/> */}
                    <Nav/>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    {getRouter()}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by CaoQ
                </Footer>
            </Layout>


            // <div>
            //     <Nav/>
            //     {getRouter()}
            // </div>
        )
    }
}