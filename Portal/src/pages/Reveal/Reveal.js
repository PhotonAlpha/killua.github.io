import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Base64 } from 'js-base64';
import ReactMarkdown from 'react-markdown';
import { Anchor, Row, Col } from 'antd';

import { getBlogData } from "actions/common";

const { Link } = Anchor;

class Reveal extends Component {
    constructor(props) {
        super(props);
        var data = this.props.location.state;  
        console.log('Reveal', data)
        this.props.getBlogData(data);
    }

    componentDidMount() {
        window.location.hash = window.decodeURIComponent(window.location.hash);
        const scrollToAnchor = () => {
            const hashParts = window.location.hash.split('#');
            if (hashParts.length > 2) {
              const hash = hashParts.slice(-1)[0];
              document.querySelector(`#${hash}`).scrollIntoView();
            }
          };
        scrollToAnchor();
        window.onhashchange = scrollToAnchor;
    }

    render() {
        const {message , isLoading, errorMsg} = this.props.common;
        console.log('Reveal render', this.props);
        return (
            <Row>
                <Col lg ={{ span:18 }} md={{ span:24 }} className='container-fluid markdown-body'>
                    {
                        isLoading? 'loading......': (
                            errorMsg? errorMsg: (
                                <ReactMarkdown source={ Base64.decode(message.content) } />
                            )
                        )
                    }
                    <div id="API"></div>
                </Col>
                <Col lg ={{ span:6 }} md={{ span:0 }}>
                    <Anchor>
                        <Link href="#components-anchor-demo-basic" title="Basic demo" />
                        <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                        <Link href="#API" title="API">
                            <Link href="#Anchor-Props" title="Anchor Props" />
                            <Link href="#Link-Props" title="Link Props" />
                        </Link>
                    </Anchor>
                </Col>
            </Row>
        )
    }
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