module.exports = {
  icon: false,
  typescript: true,
  expandProps: "end",
  svgProps: {
    width: "{ size }",
    height: "{ size }",
    fill: "currentColor",
  },
  outDir: "src",
  template: require("./template"),
};
