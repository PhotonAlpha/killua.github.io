import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Rate, Avatar, Card } from 'antd';
const { TextArea } = Input;
const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
};
class CommentInput extends Component {
    static propTypes = {
        userInfo: PropTypes.any,
        onSubmit: PropTypes.func
    }
    static defaultProps = {
        commentCount: 0
    };
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                username: props.userInfo.username,
                html_url: props.userInfo.html_url,
                avatar_url: props.userInfo.avatar_url,
                authSuccess: props.userInfo.authSuccess
            },
            content: {
                value: ''
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.userInfo != this.props.userInfo){
            this.setState({
                userInfo: {
                    username: nextProps.userInfo.username,
                    html_url: nextProps.userInfo.html_url,
                    avatar_url: nextProps.userInfo.avatar_url,
                    authSuccess: nextProps.userInfo.authSuccess
                }
            })
        }
    }
    
    
    componentDidMount() {
        // this.textarea.focus();
    }
    handleAuth(){
        if(this.props.handleAuth){
            this.props.handleAuth()
        }
    }
    handleContentChange(event) {
        this.setState({
            content: {
                ...this.state.content,
                value: event.target.value
            }
        })
    }
    handleRateChange(value) {
        this.setState({
            star: value
        })
    }
    handleSubmit = (e) => {
        const { value } = this.state.content;
        this.setState({
            content: {
                ...validateInput(value),
                value
            },
            star: this.state.star
        },() => {
            if(!this.state.content.errorMsg) {
                if (this.props.onSubmit) {
                    const content = this.state.content.value;
                    this.props.onSubmit({
                        content,
                        star: this.state.star
                    })
                }
                this.setState({ content: {value: ''} })
            }
        });
    }

    render() {
        return (
            <div className='comment-input'>
                <Card title="Comment" extra={<a >{ this.props.commentCount } comments</a>} >
                    <Form  className="login-form">
                        <FormItem
                            {...formItemLayout}
                            label={ this.state.userInfo.avatar_url? <div><Avatar size="large" src={this.state.userInfo.avatar_url} /><a target="_blank" style={{color:'#1890ff'}} src={ this.state.userInfo.html_url } >{this.state.userInfo.username}</a></div> : 'Comment' }
                            colon={this.state.userInfo.avatar_url? false: true}
                            hasFeedback
                            validateStatus={ this.state.content.validateStatus }
                            help={ this.state.content.errorMsg }
                        >
                            <TextArea placeholder="leave a comment" autosize={{ minRows: 2, maxRows: 6 }}
                                // ref={(textarea) => this.textarea = textarea} 
                                value={ this.state.content.value } 
                                onChange={ this.handleContentChange.bind(this) }
                            />
                        </FormItem>
                        <FormItem
                            wrapperCol={{
                                xs: { span: 24, offset: 0 },
                                sm: { span: 24 },
                            }}
                            >
                            <span style={{ color: '#1890ff' }} ><Icon type="exclamation-circle-o" />Markdown is supported</span>
                            <Rate onChange = { this.handleRateChange.bind(this) } />
                            {
                                this.state.userInfo.authSuccess?
                                    <Button htmlType="submit" type="primary" icon="poweroff" loading={this.state.iconLoading} 
                                        onClick={ this.handleSubmit }
                                        >
                                        Comment
                                    </Button>
                                :
                                    <Button icon="poweroff" type="danger" ghost
                                        onClick={ this.handleAuth.bind(this) }
                                        >
                                        Login with Github
                                    </Button>
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

function validateInput(content) {
    if(content){
        return {
            validateStatus: 'success',
            errorMsg: null,
        };
    }
    return {
        validateStatus: 'error',
        errorMsg: 'Input something!',
    };
}

export default CommentInput;