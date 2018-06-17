import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Avatar, Icon, Row, Col, Card } from 'antd';
import './Home.css';
import Trianglify, { randomColor } from 'trianglify';

export default class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }
  constructor(props) {
      super(props);
      this.state = {
          homepage: true
      }
  }
  

  render() {
    return (
        <div id='hero-page'>
            <Row id='hero'>
                <Col>
                <div className='layer-bg layer' data-depth='0.10' data-type='parallax'></div>
                <div className='layer-1 layer' data-depth='0.20' data-type='parallax'></div>
                <div className='layer-2 layer' data-depth='0.50' data-type='parallax'></div>
                <div className='layer-3 layer' data-depth='0.80' data-type='parallax'></div>
                <div className='layer-overlay layer' data-depth='0.85' data-type='parallax'></div>
                <div className='layer-4 layer' data-depth='1.00' data-type='parallax'></div>
                </Col>
            </Row>
            <Row id='hero-mobile'></Row>
            <div id='content' >
                <Row className='container-fluid' >
                    <Col lg={{ span: 16 }} md={24} >
                        <List
                            itemLayout="vertical"
                            size="large"
                            split={true}
                            pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 6,
                            }}
                            dataSource={listData}
                            footer={<div><b>ant design</b> footer part</div>}
                            renderItem={item => (
                            <List.Item
                                key={item.title}
                                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                
                            >
                                <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a className='text' href={item.href}>{item.title}</a>}
                                description={item.description}
                                />
                                {item.content}
                            </List.Item>
                            )}
                        />
                    </Col>
                    <Col lg={{ span: 7, offset: 1 }} md={24}>
                        <h2 style={{textAlign: 'center'}} >精选板块</h2>
                        <List
                            grid={{ gutter: { md: 16*3, lg: 0 } , lg: 1, md: 2 }}
                            dataSource={data}
                            renderItem={item => (
                            <List.Item>
                                <Card
                                hoverable={true}
                                style={{ backgroundImage: 'url('+item.backgroundURI+')' }}
                                >Card content</Card>
                            </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
  }
}
