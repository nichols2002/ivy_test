import React, { Component } from 'react';
import { render } from 'react-dom';

class HelloMessage extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
//2017.01.05.15.33
//test modify 
// 加载组件到 DOM 元素 mountNode   dddddd
render(<HelloMessage name="John" />, mountNode);
