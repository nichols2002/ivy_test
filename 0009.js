const ListItemWrapper = (props) => <li>{props.data.text}</li>;

const MyComponent = (props) => {
  return (
    <ul>
      {props.results.map((result) => {
        return <ListItemWrapper key={result.id} data={result}/>;
      })}
    </ul>
  );
}

//实际上浏览器在遍历一个字面量对象的时候会保持顺序一致，除非存在属性值可以被转换成整数值，这种属性值会排序并放在其他属性之前被遍历到，所以为了防止这种情况发生，可以在构建这个字面量的时候在 key 值前面加字符串前缀
render() {
  var items = {};

  this.props.results.forEach((result) => {
    // If result.id can look like a number (consider short hashes), then
    // object iteration order is not guaranteed. In this case, we add a prefix
    // to ensure the keys are strings.
    items['result-' + result.id] = <li>{result.text}</li>;
  });

  return (
    <ol>
      {items}
    </ol>
   );
}