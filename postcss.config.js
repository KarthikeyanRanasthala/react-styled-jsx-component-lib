const postcssCustomMedia = require("postcss-custom-media");

module.exports = {
  plugins: [
    postcssCustomMedia({
      importFrom: [
        {
          customMedia: { "--screen-large": "(min-width: 768px)" },
        },
      ],
    }),
  ],
};
