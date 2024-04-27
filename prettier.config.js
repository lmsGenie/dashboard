// @ts-check

/** @type {import('prettier').Config} */
export default {
    tabWidth: 2,
    trailingComma: "es5",
    endOfLine: "lf",
    printWidth: 80,
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    plugins: [
      "prettier-plugin-tailwindcss",
    ],
  };