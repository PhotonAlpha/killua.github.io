import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { Base64 } from 'js-base64';

import './About.css';
import { Menu, Icon, Layout, Modal, Button, Row, Col, Input, Avatar, Badge, Card, Table } from 'antd';
import Dialogue from 'components/Dialogue/Dialogue';
import DialogueCV from 'components/Dialogue/Dialogue.CV';
import Letter from 'pages/About/Letter';

import { getBlogData, getResumeInfo } from "reducers/blogs";


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
        this.props.getResumeInfo().then(() => {
            this.setState({
                visible: false,
                salt: saltVal,
                visibleCv: true,
                error: false,
                resume: this.props.resume
            });
        });
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
        this.setState({ loading: !this.state.loading });
    }

    getData = () => {
        const result = this.props.getResumeInfo();
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.common;

        return (
            <div id='A4-page'>
                {
                    isLoading? 'loading......': (
                        errorMsg? errorMsg: (
                            <ReactMarkdown source={ Base64.decode(message.content) } />
                        )
                    )
                }
                <a className="github-fork-ribbon" href="https://github.com/PhotonAlpha/photonalpha.github.io/tree/master/Portal" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
                <Letter triggerDialog = { this.showModal } />
                
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
            </div>
        )
    }
}


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
        resume: state.resume
    }
}
const mapDispatchToProps = {
    getBlogData,
    getResumeInfo
}

// export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(About);
export default connect(mapStateToProps, mapDispatchToProps)(About);