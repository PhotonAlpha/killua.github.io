import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Rate, Checkbox } from 'antd';
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
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func

    }
    static defaultProps = {
        username: ''
    };
    constructor(props){
        super(props);
        this.state = {
            username: {
                value: props.username
            },
            content: {
                value: ''
            }
        }
    }
    componentDidMount() {
        this.textarea.focus();
    }

    handleUsernameBlur(event) {
        if(this.props.onUserNameInputBlur) {
            this.props.onUserNameInputBlur(event.target.value);
        }
    }
    handleUsernameChange(event) {
        this.setState({
            username: {
                ...this.state.username,
                value: event.target.value
            }
        })
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
        console.log('handleRateChange', value);
        this.setState({
            star: value
        })
    }
    handleSubmit = (e) => {
        const { value } = this.state.username;
        const contentValue = this.state.content.value;
        this.setState({
            username: {
                ...validateInput(value),
                value
            },
            content: {
                ...validateInput(contentValue),
                value: contentValue
            },
            star: this.state.star
        },() => {
            console.log('this.......state', this.state);
            if(!this.state.username.errorMsg && !this.state.content.errorMsg) {
                if (this.props.onSubmit) {
                    const username = this.state.username.value;
                    const content = this.state.content.value;
                    this.props.onSubmit({
                        username, content,
                        star: this.state.star
                    })
                }
                this.setState({ content: {value: ''} })
            }
        });
    }

    render() {
        console.log('this.state', this.state)
        return (
            <div className='comment-input'>
                <Form  className="login-form">
                    <FormItem
                        {...formItemLayout}
                        label='用户名'
                        hasFeedback
                        validateStatus={ this.state.username.validateStatus }
                        help={ this.state.username.errorMsg }
                    >
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" placeholder="Username"
                            value={ this.state.username.value } 
                            onBlur={ this.handleUsernameBlur.bind(this) }
                            onChange={ this.handleUsernameChange.bind(this) }
                        />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='评论内容'
                        hasFeedback
                        validateStatus={ this.state.content.validateStatus }
                        help={ this.state.content.errorMsg }
                        >
                        <TextArea placeholder="leave a comment" autosize={{ minRows: 2, maxRows: 6 }}
                            ref={(textarea) => this.textarea = textarea} 
                            value={ this.state.content.value } 
                            onChange={ this.handleContentChange.bind(this) }
                        />
                    </FormItem>
                    <FormItem
                        wrapperCol={{
                            xs: { span: 24, offset: 0 },
                            sm: { span: 8, offset:16 },
                        }}
                        >
                        <Rate onChange = { this.handleRateChange.bind(this) } />
                        <Button htmlType="submit" type="primary" icon="poweroff" loading={this.state.iconLoading} 
                            onClick={ this.handleSubmit }
                            >
                            发布
                        </Button>
                    </FormItem>
                </Form>
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