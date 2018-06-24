import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Avatar, Icon, Row, Col, Card } from 'antd';
import './Home.css';
import history from 'router/history';

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
);

export default class Home extends Component {
    static propTypes = {
        issueList: PropTypes.array,
        rareList: PropTypes.array,
        handleClick: PropTypes.func
    }
    static defaultProps = {
        issueList: [],
        rareList: [],
    };
    constructor(props) {
        super(props);
    }

    handleClick(sha, issuenumber, title, e) {
        if(this.props.handleClick) {
            this.props.handleClick(sha, issuenumber, title);
        }
    }

    componentWillMount() {
        document.querySelector('.customer-jumbotron').classList.add('d-none');
    }
    componentWillUnmount() {
        document.querySelector('.customer-jumbotron').classList.remove('d-none');
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
                                dataSource={ this.props.issueList }
                                renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[<IconText type="calendar" text={item.created_at.substring(0,10)} />]}
                                    
                                >
                                    <List.Item.Meta
                                    // title={<a className='text' href={item.issue_url}>{item.title}</a>}
                                    title={<a className='text' onClick={ this.handleClick.bind(this, item.git_sha, item.number, item.title) }>{item.title}</a>}
                                    />
                                    {item.body}
                                </List.Item>
                                )}
                            />
                        </Col>
                        <Col lg={{ span: 7, offset: 1 }} md={24}>
                            <h2 style={{textAlign: 'center'}} >精选板块</h2>
                            <List
                                grid={{ gutter: { md: 16*3, lg: 0 } , lg: 1, md: 2 }}
                                dataSource={ this.props.rareList }
                                renderItem={item => (
                                <List.Item>
                                    <Card onClick={ this.handleClick.bind(this, item.git_sha, item.number, item.title) }
                                    hoverable={true}
                                    style={{ backgroundImage: 'url('+item.backgroundURI+')' }}
                                    >{item.body}</Card>
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
