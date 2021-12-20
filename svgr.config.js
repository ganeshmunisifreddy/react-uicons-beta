module.exports = {
  icon: false,
  typescript: true,
  expandProps: "end",
  svgProps: {
    //viewBox: "0 0 24 24",
    viewBox: "0 0 512 512",
    width: "{ size }",
    height: "{ size }",
    fill: "currentColor",
  },
  svgoConfig: {
    removeViewBox: false,
  },
  outDir: "src",
  template: require("./template"),
};
