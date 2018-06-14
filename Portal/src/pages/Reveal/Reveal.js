import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Base64 } from 'js-base64';
import ReactMarkdown from 'react-markdown';
import { Anchor, Row, Col } from 'antd';

import { getBlogData } from "actions/common";
import './Reveal.css'
const { Link } = Anchor;

class Reveal extends Component {
    constructor(props) {
        super(props);
        var data = this.props.location.state;  
        console.log('Reveal', data)
        this.props.getBlogData(data);
    }

    componentDidMount() {
        var data = this.props.location.state;
        this.props.getBlogData(data);
        console.log('componentDidMount~~~~~~~~`')
        console.log(document.getElementsByTagName('h1'))
        console.log(document.getElementsByTagName('h2'))
        var anchors = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
        if(anchors){

        }
        console.log(0)
    }
    render() {
        const {message , isLoading, errorMsg} = this.props.common;
        console.log('Reveal render', this.props);
        return (
            <div>
                <Row>
                    <Col lg ={{ span:18 }} md={{ span:24 }} className='container-fluid markdown-body'>
                        {
                            isLoading? 'loading......': (
                                errorMsg? errorMsg: (
                                    <ReactMarkdown source={ Base64.decode(message.content) } renderers={{heading: HeadingRenderer}} />
                                )
                            )
                        }
                        <div id="API">123</div>
                    </Col>
                    <Col lg ={{ span:6 }} md={{ span:0 }}>
                        <Anchor showInkInFixed={true} offsetTop={138} >
                            <Link href="#components-anchor-demo-basic" title="Basic demo" />
                            <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                            <Link href="#API" title="API">
                                <Link href="#Anchor-Props" title="Anchor Props" />
                                <Link href="#Link-Props" title="Link Props" />
                            </Link>
                        </Anchor>
                    </Col>
                </Row>
            </div>
        )
    }
}

function flatten(text, child) {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(flatten, text)
}
function HeadingRenderer(props) {
    console.log('HeadingRenderer', props)
    var children = React.Children.toArray(props.children)
    var text = children.reduce(flatten, '')
    // var slug = text.toLowerCase().replace(/\W/g, '-')
    return React.createElement('h' + props.level, {id: text}, props.children)
}
const mapStateToProps = state => {
    return {
        common: state.common,
    }
}
const mapDispatchToProps = {
    getBlogData,
}
export default connect(mapStateToProps, mapDispatchToProps)(Reveal);