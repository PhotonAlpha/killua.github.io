import React, {Component} from 'react';

import Nav from 'components/Nav/Nav';
import getRouter from 'router/router';

import { Layout, Breadcrumb, BackTop } from 'antd';
import './APP.css';
import image from 'assets/github-for-atom.png';

const { Header, Content, Footer } = Layout;

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Header style={{ width: '100%' }}>
                    <div className="logo" ></div>
                    {/* <img src={image}/> */}
                    <Nav/>
                </Header>
                <Content style={{ padding: '0 50px'}}>
                    <BackTop />
                    <div className="VideoPane-bg">
                        {/* <video className="" src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/8DRNQWMHYGK51522889992206.mp4" data-src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/8DRNQWMHYGK51522889992206.mp4" loop="loop" muted="muted" autoPlay="autoplay" playsInline="playsinline">
                        </video> */}
                        {/* <div class="VideoPane-overlay">
                        </div>
                        <div class="VideoPane-fallback" style="background-image: url('https://bnetcmsus-a.akamaihd.net/cms/template_resource/2s/2SZV67PP7FC41510083813775.jpg');">
                        </div> */}
                    </div>
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