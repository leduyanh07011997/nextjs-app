module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json", ".svg", ".jpg"],
        alias: {
          "@": "./styles",
        },
      },
    ],
  ],
};
