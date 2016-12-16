//受控组件
render: function() {
    return <input type="text" value="hello"/>;
}


///////////////////////////////////////////////////////
getInitialState: function() {
    return {value: 'hello'};
},
handleChange: function(event) {
    this.setState({value: event.target.value});
},
render: function() {
    var value = this.state.value;
    return <input type="text" value={this.state.value} onChange={this.handleChange} />;
}
////////////////////////////////////////////////////////////
<select multiple={true} value={['B', 'C']}>
    <option value="A">Apple</option>
    <option value="B">Banana</option>
    <option value="C">Cranberry</option>
</select>
///////////////////////////////////////////////////////////