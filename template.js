const template = ({ componentName, jsx }, { tpl }) => {
  const ComponentName = `${componentName.replace("Svg", "")}`;
  return tpl`
  
  import * as React from "react";

  function ${ComponentName}(props: any) {
    const { size = "1em" } = props;
    return ${jsx};
  }

  export default ${ComponentName}`;
};

module.exports = template;

// function defaultTemplate(
//   { imports, interfaces, componentName, props, jsx },
//   { template },
//   opts
// ) {
//   const tygerIcon = `${componentName.replace("Svg", "")}`;
//   const plugins = ["jsx"];
//   if (opts.typescript) {
//     plugins.push("typescript");
//   }
//   const typeScriptTpl = template.smart({ plugins });
//   return typeScriptTpl.ast`${imports}
//   ${interfaces}
//   function ${tygerIcon}(${props}) {
//     return ${jsx};
//   }
//   export default ${tygerIcon}
//     `;
// }
// module.exports = defaultTemplate;
