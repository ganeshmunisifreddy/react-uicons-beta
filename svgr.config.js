module.exports = {
  icon: false,
  typescript: true,
  expandProps: "end",
  svgProps: {
    width: "{ size }",
    height: "{ size }",
  },
  outDir: "src",
  template: require("./template"),
};
