import React, {Component} from 'react';

import Nav from 'components/Nav/Nav';
import getRouter from 'router/router';
import backgroundPng from '../Utils/Utils';

import { Layout, Breadcrumb, BackTop, Icon, Menu, Row, Col } from 'antd';
import './APP.css';

const { Header, Content, Footer, Sider  } = Layout;

export default class App extends Component {
    handleScroll (event) {
        var depth, i, layer, layers, len, movement, topDistance, translate3d;
        topDistance = this.pageYOffset;
        // console.log('move', topDistance)
        layers = document.querySelectorAll("[data-type='parallax']");
        if(topDistance > 0){
            var element = document.querySelector('.ant-layout-header');
            if(element) {
                element.classList.add('site-header-nav-scrolled');
            }
        }else{
            var element = document.querySelector('.ant-layout-header');
            if(element) {
                element.classList.remove('site-header-nav-scrolled');
            }
        }
        for (i = 0, len = layers.length; i < len; i++) {
            layer = layers[i];
            depth = layer.getAttribute('data-depth');
            movement = -(topDistance * depth);
            translate3d = 'translate3d(0, ' + movement + 'px, 0)';
            layer.style['-webkit-transform'] = translate3d;
            layer.style['-moz-transform'] = translate3d;
            layer.style['-ms-transform'] = translate3d;
            layer.style['-o-transform'] = translate3d;
            layer.style.transform = translate3d;
        }
    }
    
    // generateJumbotron() {
    //     const width = document.body.offsetWidth;
    //     const url =  backgroundPng(width, 200, 60);
    //     console.log('url', url)
    //     return url;
    // }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const href = window.location.href;
        if(href.indexOf('page1') > -1){
            return (
                getRouter()
            )
        }
        return (
            <Layout>
                <Row>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '98%' }}>
                    <Col xs={{ span: 0 }} lg={{ span: 3 }}>
                        <div className="logo" ></div>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 21 }}>
                        <Nav/>
                    </Col>
                    </Header>
                </Row>
                <Row>
                    <div className='customer-jumbotron' 
                        style={{ backgroundImage: 'url('+backgroundPng(document.body.offsetWidth, 200, 60)+')' }} >
                    </div>
                    <Content>
                        <BackTop />
                        {getRouter()}
                    </Content>
                </Row>
                <Row>
                    <Footer style={{ textAlign: 'center' }}>
                        <div>Copyright <Icon type="copyright" /> 2018 Cao Qiang Used By React & Ant Design </div>
                    </Footer>
                </Row>
            </Layout>
        )
    }
}
