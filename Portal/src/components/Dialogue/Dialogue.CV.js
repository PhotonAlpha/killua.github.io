import React, {Component} from 'react';
import './Dialogue.css';
import { Menu, Icon, Layout, Modal, Button, Row, Col, Input, Avatar, Badge, Card } from 'antd';

const { Meta } = Card;

export default class DialogueCV extends Component {
    constructor(props){
        super(props);
        this.state = this.props.dialogues;
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.dialogues != this.props.dialogues) {
            this.setState(
                nextProps.dialogues
            )
        }
    }
    handleOk = () => {
        window.print();
    }
    handleCancel = () => {
        this.setState({ visibleCv: false });
    }

    render() {
        // console.log('CV', this.state)
        const { visibleCv, loading, error, resume } = this.state;
        return (
                <Modal
                    width = '212mm'
                    bodyStyle={{ padding: '0' }}
                    maskClosable={ false }
                    maskStyle={{ backgroundColor: 'rgba(100, 149, 183, 0.58)' }}
                    style={{ top: 20 }}
                    visible={visibleCv}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>返回</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            打印
                        </Button>,
                    ]}
                >
                    {
                        error? template: <ResumeModal resumeData={ resume } />
                    }
                </Modal>
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
    // console.log('ListItems', props);
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

function ResumeModal(props){
    console.log('ResumeModal', props)
    const message = props.resumeData;
    return (
        <Row id = 'dialogcv' style = {{padding: '50px 0 0 0'}}>
            <Card
                hoverable
                bordered={true} >
                <Meta
                    style = {{ textAlign: 'center'}}
                    title= {
                        <div>
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
                <BasicInfo basicInfo = { message.basicInfo } />
            </Card>
            <Card 
                hoverable
                title = {
                    <div>
                        <Icon type="save" />&nbsp;&nbsp;&nbsp;&nbsp;应聘岗位
                    </div>
                }>
                <p>
                    { message.post }
                </p>
            </Card>
            <Card 
                hoverable
                title = {
                    <div>
                        <Icon type="profile" />&nbsp;&nbsp;&nbsp;&nbsp;工作经验
                    </div>
                }>
                <TableItem type="history" items={ message.employmentHistory } />
            </Card>
            <Card 
                hoverable
                title = {
                    <div>
                        <Icon type="star-o" />&nbsp;&nbsp;&nbsp;&nbsp;技能专长
                    </div>
                }>
                <ListItems items = { message.skill } />
            </Card>
            <Card 
                hoverable
                title = {
                    <div>
                        <Icon type="trophy" />&nbsp;&nbsp;&nbsp;&nbsp;项目经验
                    </div>
                }>
                <ListItems type='experience' items = { message.experience } />
            </Card>
            <Card 
                hoverable
                title = {
                    <div>
                        <Icon type="gift" />&nbsp;&nbsp;&nbsp;&nbsp;教育经历
                    </div>
                }>
                <TableItem type="education" items={ message.education } ></TableItem>
            </Card>
            <Card 
                hoverable
                title = {
                    <div>
                        <Icon type="coffee" />&nbsp;&nbsp;&nbsp;&nbsp;自我评价
                    </div>
                }>
                <ListItems items = { message.evaluation } />
            </Card>
        </Row>
    )
}

const template = (
    <Row id = 'dialogcv' className='print' style = {{padding: '50px 0 0 0'}}>
        <Card
            hoverable
            bordered={false} >
            <Meta
                style = {{ textAlign: 'center'}}
                title= {
                    <div>
                        <Avatar style={{ verticalAlign: 'middle' }} className="portrait" src="https://avatars0.githubusercontent.com/u/21081491?v=3&s=460" />
                        <h2>Eric</h2>
                        <div className='error-explain' > 信息验证错误，当前为模板数据。请输入正确的验证码！</div>
                    </div>
                }
            />
        </Card>
        <Card
            hoverable
            bordered={false}
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
            bordered={false}
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
            bordered={false}
            title = {
                <div>
                    <Icon type="profile" />&nbsp;&nbsp;&nbsp;&nbsp;工作经验
                </div>
            }>
            结果
        </Card>
        <Card 
            hoverable
            bordered={false}
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
            bordered={false}
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
            bordered={false}
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
            bordered={false}
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
)
