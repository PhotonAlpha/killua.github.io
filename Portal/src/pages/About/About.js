import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { Base64 } from 'js-base64';

import './About.css';
import { Menu, Icon, Layout, Modal, Button, Row, Col, Input, Avatar, Badge, Card, Table } from 'antd';
import Dialogue from 'components/Dialogue/Dialogue';
import DialogueCV from 'components/Dialogue/Dialogue.CV';
import Letter from 'pages/About/Letter';

import { getResumeInfo , getResourceTrees, getBlogData } from "actions/common";
import {getUserInfo} from "actions/userInfo";

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const { Meta } = Card;

const  input  =  '# 这是一个标题\ n \ n这是一个段落'

class About extends Component {
    constructor(props){
        super(props);
        props.getBlogData();
    }

    state = {
        loading: false,
        visible: false,
        error: false,
        visibleCv: false,
        salt: ''
    }
    showModal = () => {
        this.setState({
            visible: true,
            visibleCv: false,
        });
    }
    handleOk = (saltVal) => {
        // this.setState({
        //     visible: true,
        //     salt: saltVal,
        //     error: true,
        // });
        this.setState({
            visible: false,
            salt: saltVal,
            visibleCv: true,
            error: true
        });
        console.log('handleOk', saltVal, this.state);

    }


    showReusme = () => {
        this.setState({
            visibleCv: true,
        });
    }
    changeUser = () => {
        const index = UserList.indexOf(this.state.user);
        this.setState({
            user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
            color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
        });
    }
    handleClick = () => {
        console.log('about handleClick')
        this.setState({ loading: !this.state.loading });
    }

    getData = () => {
        console.log(this.props.common);
        const result = this.props.getResourceTrees();
        console.log(result);
        console.log(this.props.common);
        // return result;
        // https://api.github.com/repos/PhotonAlpha/photon-repository/contents
        // window.print(); 
        // window.close();
    }

    render() {
        console.log('render', this.props, this.state);
        const {information, isLoading, errorMsg} = this.props.common;
        // const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return (
            <div id='A4-page'>
                <ReactMarkdown source={ Base64.decode(information.content) } />
                <a className="github-fork-ribbon" href="https://github.com/PhotonAlpha/photonalpha.github.io/tree/master/Portal" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
                <Letter triggerDialog = { this.showModal } />
                
                {
                    isLoading ? '请求信息中......' :
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>用户信息：</p>
                                </div>
                        )
                }
                <button onClick={this.getData.bind(this, information.employmentHistory)}>请求用户信息</button>

                <Row>
                    <Button type="primary" onClick={this.showModal}>
                        Open
                    </Button>
                    <Button type="primary" onClick={this.showReusme}>
                        Open-CV
                    </Button>
                    <Dialogue dialogues={this.state} handleOk={ this.handleOk } />
                    <DialogueCV dialogues={this.state} />

                    <Button type="primary" onClick={this.getData}  >
                        get data
                    </Button>
                </Row>
                <Row style = {{padding: '50px 0 0 0'}}>
                    <Card
                        hoverable
                        bordered={true} >
                        <Meta
                            style = {{ textAlign: 'center'}}
                            title= {
                                <div>
                                    <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} className="portrait" src="https://avatars0.githubusercontent.com/u/21081491?v=3&s=460" />
                                    <h2>Eric</h2>
                                </div>
                            }
                        />
                    </Card>
                    <Card
                        hoverable
                        title = {
                            <div>
                                <Icon type="idcard" />&nbsp;&nbsp;&nbsp;&nbsp;个人信息
                            </div>
                        }>
                        <BasicInfo basicInfo = { information.basicInfo } />
                    </Card>
                    <Card 
                        hoverable
                        title = {
                            <div>
                                <Icon type="save" />&nbsp;&nbsp;&nbsp;&nbsp;应聘岗位
                            </div>
                        }>
                        <p>
                            { information.post }
                        </p>
                    </Card>
                    <Card 
                        hoverable
                        title = {
                            <div>
                                <Icon type="profile" />&nbsp;&nbsp;&nbsp;&nbsp;工作经验
                            </div>
                        }>
                        <TableItem type="history" items={ information.employmentHistory } />
                    </Card>
                    <Card 
                        hoverable
                        title = {
                            <div>
                                <Icon type="star-o" />&nbsp;&nbsp;&nbsp;&nbsp;技能专长
                            </div>
                        }>
                        <ListItems items = { information.skill } />
                    </Card>
                    <Card 
                        hoverable
                        title = {
                            <div>
                                <Icon type="trophy" />&nbsp;&nbsp;&nbsp;&nbsp;项目经验
                            </div>
                        }>
                        <ListItems type='experience' items = { information.experience } />
                    </Card>
                    <Card 
                        hoverable
                        title = {
                            <div>
                                <Icon type="gift" />&nbsp;&nbsp;&nbsp;&nbsp;教育经历
                            </div>
                        }>
                        <TableItem type="education" items={ information.education } ></TableItem>
                    </Card>
                    <Card 
                        hoverable
                        title = {
                            <div>
                                <Icon type="coffee" />&nbsp;&nbsp;&nbsp;&nbsp;自我评价
                            </div>
                        }>
                        <ListItems items = { information.evaluation } />
                    </Card>
                </Row>
                
                <div className = 'd-none' >
                    <Card loading={!this.state.loading} title="Card title">
                    Whatever content
                    </Card>
                    <Button onClick={this.handleClick} style={{ marginTop: 16 }}>Toggle loading</Button>
                </div>
            </div>
        )
    }
}

const element = <h1>Hello, world!</h1>;

function TableItem(props) {
    // https://reactjs.org/docs/lists-and-keys.html
    if(props.type === 'history' && props.items){
        return props.items.map((elem, index) => 
            <Row key={index} >
                <Col xs = {{span: 6}} >{ elem.period }</Col>
                <Col  xs = {{span: 12}}>{ elem.corporation }</Col>
                <Col  xs = {{span: 6}}>{ elem.post }</Col>
            </Row>
        )
    }else if(props.type === 'education' && props.items){
        return props.items.map((elem, index) => 
            <Row key={index} >
                <Col  xs = {{span: 12}}>{ elem.name }</Col>
                <Col  xs = {{span: 6}}>{ elem.specialty }</Col>
                <Col xs = {{span: 6}} >{ elem.period }</Col>
            </Row>
        )
    }
    return null;
}

function BasicInfo(props) {
    let comp = null;
    if(props.basicInfo){
        comp = [];
        Object.entries(props.basicInfo).forEach(([key, value], index) => {
            comp.push(<Card.Grid key = {index} className='grid-style'>{key}：</Card.Grid>)
            comp.push(<Card.Grid key = {key + index} className='grid-style'>{value}</Card.Grid>)

        });
    }
    return comp;
}
function ListItems(props) {
    console.log('ListItems', props);
    let listItems = null;
    if(props.type === 'experience' && props.items){
        listItems = props.items.map((item, index) => 
            <li key = {index} >
                <label >{item.period}</label>
                <h6>项目名称:</h6><p>{item.name}</p>
                <h6>项目描述:</h6><p>{item.description}</p>
                <h6>项目描述:</h6><p>{item.responsibility}</p>
            </li>
        );
        return (<ul>{listItems}</ul>);
    } else if(props.items) {
        listItems = props.items.map((str, index) => <li key = {index} >{str}</li>);
        return (<ul>{listItems}</ul>);
    }
    return null;
}


const mapStateToProps = state => {
    return {
        common: state.common,
        userInfo: state.userInfo
    }
}
const mapDispatchToProps = {
    getResumeInfo,
    getUserInfo,
    getResourceTrees,
    getBlogData
}

// export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(About);
export default connect(mapStateToProps, mapDispatchToProps)(About);