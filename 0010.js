const Parent = (props) => <div>{props.children}</div>;
React.render(<Parent><span>hello</span>{'world'}</Parent>, document.body);