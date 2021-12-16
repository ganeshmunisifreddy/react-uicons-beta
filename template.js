const template = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl }
) => {
  const ComponentName = `${componentName.replace("Svg", "")}`;
  return tpl`
  ${imports}
  
  ${interfaces}

  function ${ComponentName}(${props}) {
    const { size = "1em" } = props;
    return ${jsx};
  }

  export default ${ComponentName}`;
};

module.exports = template;
