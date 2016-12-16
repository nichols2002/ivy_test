import React, { Component } from 'react';
import { render } from 'react-dom';

class GroceryList extends Component {
  handleClick(i) {
    console.log('You clicked: ' + this.props.items[i]);
  }

  render() {
    return (
      <div>
        {this.props.items.map((item, i) => {
          return (
            <div onClick={this.handleClick.bind(this, i)} key={i}>{item}</div>
          );
        })}
      </div>
    );
  }
}

render(
  <GroceryList items={['Apple', 'Banana', 'Cranberry']} />, mountNode
);