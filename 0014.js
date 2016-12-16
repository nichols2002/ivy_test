import React, { Component } from 'react';
import someActionCreator from './actions/someAction';
import * as actionCreators from './actions/otherAction';

function mapStateToProps(state) {
  return {
    propName: state.propName
  };
}

function mapDispatchProps(dispatch) {
  return {
    someAction: (arg) => dispatch(someActionCreator(arg)),
    otherActions: bindActionCreators(actionCreators, dispatch)
  };
}

class App extends Component {
  render() {
    // `mapStateToProps` 和 `mapDispatchProps` 返回的字段都是 `props`
    const { propName, someAction, otherActions } = this.props;
    return (
      <div onClick={someAction.bind(this, 'arg')}>
        {propName}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchProps)(App);