import React, {Component} from 'react';
import './About.css';
import { Menu, Icon, Layout, Modal, Button, Row, Col, Input, Avatar, Badge, Card } from 'antd';
import Dialogue from 'components/Dialogue/Dialogue';

import {connect} from 'react-redux';
import {getResumeInfo} from "actions/common";
import {getUserInfo} from "actions/userInfo";

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const { Meta } = Card;

class About extends Component {
    constructor(props){
        super(props);
        this.getData = this.getData.bind(this);
    }

    state = {
        loading: false,
        visible: false,
    }
    showModal = () => {
        console.log('about showModal')
        this.setState({
            visible: true,
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

    getData() {
        console.log(this.props.common);
        const result = this.props.getResumeInfo()
        console.log(result);
        console.log(this.props.common);
        return result;
    }

    render() {
        console.log('render', this.props);
        const {information, isLoading, errorMsg} = this.props.common;
        // const {userInfo, isLoading, errorMsg} = this.props.userInfo;

        return (
            <div id='A4-page'>
                <a className="github-fork-ribbon" href="https://github.com/PhotonAlpha/photonalpha.github.io/tree/master/Portal" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
                {
                    isLoading ? '请求信息中......' :
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>用户信息：</p>
                                    {/* {JSON.stringify(information)} */}
                                    <History params = {information.employmentHistory} />
                                    {/* { (() => {
                                        let res = '';
                                        console.log(information.employmentHistory);
                                        if(information.employmentHistory){
                                            res = information.employmentHistory.map((element, index) => {
                                                return <p key = {index} >{JSON.stringify(element)}</p>
                                            });
                                        }
                                        console.log(res);
                                        return res;
                                    })()
                                    } */}
                                </div>
                        )
                }
                <button onClick={this.getData}>请求用户信息</button>

                <Row>
                    <Button type="primary" onClick={this.showModal}>
                        Open
                    </Button>
                    <Dialogue dialogues = {this.state} />

                    <Button type="primary"  >
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
                        <Card.Grid className='grid-style'>信息1：</Card.Grid>
                        <Card.Grid className='grid-style'>结果1</Card.Grid>
                        <Card.Grid className='grid-style'>信息2：</Card.Grid>
                        <Card.Grid className='grid-style'>结果2</Card.Grid>
                        <Card.Grid className='grid-style'>信息3：</Card.Grid>
                        <Card.Grid className='grid-style'>结果3</Card.Grid>
                        <Card.Grid className='grid-style'>信息4：</Card.Grid>
                        <Card.Grid className='grid-style'>结果4</Card.Grid>
                        <Card.Grid className='grid-style'>信息5：</Card.Grid>
                        <Card.Grid className='grid-style'>结果5</Card.Grid>
                        <Card.Grid className='grid-style'>信息6：</Card.Grid>
                        <Card.Grid className='grid-style'>结果6</Card.Grid>
                        <Card.Grid className='grid-style'>信息7：</Card.Grid>
                        <Card.Grid className='grid-style'>结果7</Card.Grid>
                        <Card.Grid className='grid-style'>信息8：</Card.Grid>
                        <Card.Grid className='grid-style'>结果8</Card.Grid>
                    </Card>
                </Row>
                





                <Row className = 'd-none' style = {{padding: '50px 0 0 0'}}>
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
                        <Card.Grid className='grid-style'>信息1：</Card.Grid>
                        <Card.Grid className='grid-style'>结果1</Card.Grid>
                        <Card.Grid className='grid-style'>信息2：</Card.Grid>
                        <Card.Grid className='grid-style'>结果2</Card.Grid>
                        <Card.Grid className='grid-style'>信息3：</Card.Grid>
                        <Card.Grid className='grid-style'>结果3</Card.Grid>
                        <Card.Grid className='grid-style'>信息4：</Card.Grid>
                        <Card.Grid className='grid-style'>结果4</Card.Grid>
                        <Card.Grid className='grid-style'>信息5：</Card.Grid>
                        <Card.Grid className='grid-style'>结果5</Card.Grid>
                        <Card.Grid className='grid-style'>信息6：</Card.Grid>
                        <Card.Grid className='grid-style'>结果6</Card.Grid>
                        <Card.Grid className='grid-style'>信息7：</Card.Grid>
                        <Card.Grid className='grid-style'>结果7</Card.Grid>
                        <Card.Grid className='grid-style'>信息8：</Card.Grid>
                        <Card.Grid className='grid-style'>结果8</Card.Grid>
                    </Card>
                    <Card 
                        hoverable
                        title = {
                            <div>
                                <Icon type="save" />&nbsp;&nbsp;&nbsp;&nbsp;应聘岗位
                            </div>
                        }>
                        <p>
                            Python / Web / 互联网教育
                        </p>
                    </Card>
                    <Card 
                        hoverable
                        title = {
                            <div>
                                <Icon type="profile" />&nbsp;&nbsp;&nbsp;&nbsp;工作经验
                            </div>
                        }>
                        结果
                    </Card>
                    <Card 
                        hoverable
                        title = {
                            <div>
                                <Icon type="star-o" />&nbsp;&nbsp;&nbsp;&nbsp;技能专长
                            </div>
                        }>
                        <ul className="stack-list">
                            <li>
                                <label className="left-label" >前端</label><span className="label-value" >jQuery、Angular.js、React.js</span><span className="item-remove" ><i className="iconfont"></i></span></li>
                            <li>
                                <label className="left-label" >后端</label><span className="label-value" >Flask、Django、Twisted、Node.js、MongoDB、MySQL、Redis</span><span className="item-remove" ><i className="iconfont"></i></span></li>
                            <li>
                                <label className="left-label" >其它</label><span className="label-value" >我全都是瞎写的。</span><span className="item-remove" ><i className="iconfont"></i></span></li>
                        </ul>
                    </Card>
                    <Card 
                        hoverable
                        title = {
                            <div>
                                <Icon type="trophy" />&nbsp;&nbsp;&nbsp;&nbsp;项目经验
                            </div>
                        }>
                        <ul className="stack-list">
                            <li>
                                <label className="left-label" >2017/10 ~ now</label>
                                <h6>项目描述:</h6><p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam。Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <h6>责任描述:</h6><p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam。Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </li>
                            <li>
                                <label className="left-label" >2016/10 ~ 2017/9</label>
                                <h6>项目描述:</h6><p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <h6>责任描述:</h6><p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </li>
                            <li>
                                <label className="left-label" >2015/10 ~ 2016/9</label>
                                <h6>项目描述:</h6><p >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <h6>责任描述:</h6><p >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </li>
                        </ul>
                    </Card>
                    <Card 
                        hoverable
                        title = {
                            <div>
                                <Icon type="gift" />&nbsp;&nbsp;&nbsp;&nbsp;教育经历
                            </div>
                        }>
                        <Row>
                            <Col xs = {{span:8}}>北京邮电大学</Col>
                            <Col xs = {{span:8}}>网络工程专业（本科）</Col>
                            <Col xs = {{span:8}}>2012-2017</Col>
                        </Row>
                    </Card>
                    <Card 
                        hoverable
                        title = {
                            <div>
                                <Icon type="coffee" />&nbsp;&nbsp;&nbsp;&nbsp;自我评价
                            </div>
                        }>
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
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
function History(props) {
    console.log('History', props.params)
    if(props.params){
        return props.params.map((elem, index) => {
            <p key={index}>{JSON.stringify(elem)}</p> 
        })
    }
    // https://reactjs.org/docs/lists-and-keys.html
    // const content = (
    //     !props.params ? '' :
    //         props.params.map((elem, index) => {
    //             return <p key={index}>{JSON.stringify(elem)}</p>
    //     })
    // );
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
    getUserInfo
}

// export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(About);
export default connect(mapStateToProps, mapDispatchToProps)(About);