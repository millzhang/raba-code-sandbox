import "./styles.css";

document.getElementById("app").innerHTML = `Hello World`;

/**
 * 单列模式
 */
let SingleTon = (function () {
  function Single(args) {
    console.log('init single')
    let params = args || {};
    this.name = '单例模式'
    this.pointX = params.pointX || 0
  }
  
  // 实例容器
  let instance = null
  return {
    getInstance(args){
      if(instance){
        return instance
      }
      return new Single(args)
    }
  }
})();

let s = SingleTon.getInstance({pointX:33})
console.log(s.pointX)