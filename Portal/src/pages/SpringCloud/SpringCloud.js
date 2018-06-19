import React, {Component} from 'react';
import { List, Avatar, Icon, Row, Col, Card } from 'antd';
import './SpringCloud.css'
import Trianglify, { randomColor } from 'trianglify';

var pngURI = Trianglify({
    width: 277,
    height: 127,
    cell_size: 55,
    x_colors: 'random',
  }).png();

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

export default class SpringCloud extends Component {
    constructor(props) {
        super(props);
        this.start(1,2);
    }
    start(a,b){
        console.log(a,b)
    }

    state = {
        reverse: false,
    }
    randomNum(minNum,maxNum) {
        return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
    }
    handleClick = () => {
        let pattern = Trianglify({width: 200, height: 200})
        console.log(pattern)
    }

    render() {
        return (
            <div id ='SpringCloud' className='container'>
            <button onClick={this.start} >test</button>
            <Row>
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
            <Row>
                {/* <h1 data-heading="Frozen">
                    Frozen
                </h1>
                <div className='back1'></div>
                <div className='back2'></div>
                <div id='back'></div>
                <div className="wrapper">
                    <button onClick={ this.handleClick } >click on me :)</button>    
                </div>
                <div className="tagcloud">
                    <a href="#" className="1">11</a>
                    <a href="#" className="a-2">222</a>
                    <a href="#" className="a-3">33</a>
                    <a href="#" className="a-4">44</a>
                    <a href="#" className="a-5">55</a>
                    <a href="#" className="a-6">66</a>
                    <a href="#" className="a-7">77</a>
                    <a href="#" className="a-8">88</a>
                    <a href="#" className="a-9">99</a>
                    <a href="#" className="a-10">100</a>
                    <a href="#" className="a-11">110</a>
                    <a href="#" className="a-12">120</a>
                    <a href="#" className="a-13">130</a>
                    <a href="#" className="145">140</a>
                </div> */}
            </Row>
            </div>
        )
    }
}

