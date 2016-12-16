render: function() {
    return <p onClick={this.handleClick.bind(this, 'extra param')}>;
},
handleClick: function(param, event) {
    // handle click
}