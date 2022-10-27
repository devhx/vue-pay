module.exports = {
   root: true,
   env: {
      node: true
   },
   // extends: ["plugin:vue/essential", "@vue/prettier"],//这里面的@vue/prettier去掉
   extends: ["plugin:vue/essential"],
   rules: {
      "no-console": "off",
      "no-debugger": "off",
   },
   parserOptions: {
      parser: "babel-eslint"
   }
};