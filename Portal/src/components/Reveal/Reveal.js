import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Base64 } from 'js-base64';
import { Anchor, Row, Col } from 'antd';
import ReactMarkdown from 'react-markdown';

import './Reveal.css';

const { Link } = Anchor;
export default class Reveal extends Component {
    static propTypes = {
        blogContent: PropTypes.string
    }
    constructor(props) {
        super(props);
    }
    
    _scrollTarget(id){
        if(document.getElementById(id)){
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' }); 
        }
    }

    render() {
        return (
            <div id='reveal'>
                <Row>
                    <Col lg ={{ span:18 }} md={{ span:24 }} className='container-fluid markdown-body'>
                        <ReactMarkdown source={ Base64.decode(this.props.blogContent) } 
                        renderers={{heading: HeadingRenderer}} 
                        // transformImageUri={this.imgUtil}
                        />
                    </Col>
                    <Col lg ={{ span:6 }} md={{ span:0 }} style={{ zIndex: '10' }} >
                        <Anchor showInkInFixed={true} offsetTop={138} bounds={20} >
                            <h3 style={{textAlign: 'center'}} >Post Directory</h3>
                            <AnchorLink scrollTarget={ this._scrollTarget.bind(this) } />
                        </Anchor>
                    </Col>
                </Row>
            </div>
        )
    }
}

function AnchorLink(props){
    const anchors = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'));
    function handleClick(id) {
        if(props.scrollTarget){
            props.scrollTarget(id)
        }
    }
    const dataTree = anchors.
        filter(item => (item.localName.indexOf('h')>-1)? true: false)
        .map((item, index) => {
            return (
                <div key={index} className="ant-anchor-link" >
                    <a className="ant-anchor-link-title" onClick={handleClick.bind(this, item.id)} hre={'#'+item.id} title={item.align}>{item.align}</a>
                </div>
                // <Link key={index} href={'#'+item.id} title={item.align} />
            )
        });
    // console.log('AnchorLink', dataTree);  
    return dataTree;
}

function flatten(text, child) {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(flatten, text)
}
function HeadingRenderer(props) {
    // console.log('HeadingRenderer', props);
    const children = React.Children.toArray(props.children);
    const text = children.reduce(flatten, '');
    let content = text;
    if(props.level >1){
        content = '- '+content;
        for(var i=0; i< props.level-1;i++){
            content = '  '+content;
        }
    }
    // var slug = text.toLowerCase().replace(/\W/g, '-')
    return React.createElement('h' + props.level, {id: text, align:content}, props.children)
}
