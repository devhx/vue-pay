module.exports = {
   "plugins": {
     "postcss-pxtorem": {
         rootValue: 37.5, // 根据设计图尺寸写，设计图是1920，就写192
         propList: ['*'], // 需要被转换的属性
     }
   }
 }