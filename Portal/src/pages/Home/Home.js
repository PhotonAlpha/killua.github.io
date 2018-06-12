import React, {Component} from 'react';
import { List, Avatar, Icon, Row, Col, Card } from 'antd';
import './Home.css';
import Trianglify, { randomColor } from 'trianglify';

const data = [
    {
      title: 'Title 1',
      backgroundURI: Trianglify({
        width: 277,
        height: 200,
        cell_size: (Math.random() * 30) + 25,
        x_colors: 'random',
      }).png()
    },
    {
      title: 'Title 2',
      backgroundURI: Trianglify({
        width: 277,
        height: 200,
        cell_size: (Math.random() * 30) + 25,
        x_colors: 'random',
      }).png()
    },
    {
      title: 'Title 3',
      backgroundURI: Trianglify({
        width: 277,
        height: 200,
        cell_size: (Math.random() * 30) + 25,
        x_colors: 'random',
      }).png()
    },
    {
      title: 'Title 4',
      backgroundURI: Trianglify({
        width: 277,
        height: 200,
        cell_size: (Math.random() * 30) + 25,
        x_colors: 'random',
      }).png()
    },
];

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `一文读懂 Spring Boot、微服务架构和大数据治理三者之间的故事 ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
);

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    onChange(a, b, c) {
        console.log(a, b, c);
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
                <div className='customer-gradient' >
                </div>
                <div id='content' >
                    <Row className='container' >
                        <Col xs={{ span: 16 }} >
                            <List
                                itemLayout="vertical"
                                size="large"
                                split={true}
                                pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 10,
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
                        <Col xs={{ span: 6, offset: 1 }} >
                            <h2 style={{textAlign: 'center'}} >精选板块</h2>
                            <List
                                grid={{ column: 1 }}
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

