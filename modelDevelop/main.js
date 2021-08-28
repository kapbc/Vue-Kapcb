(function () {
  /**
   * 使用modelOne.js中导出的modelOne
   */
  if (modelOne.flag) {
    console.log('模块化开发');
  }

  console.log(modelOne.sum(11, 11));
})();