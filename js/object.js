/**
 * @description 对象深层取值，避免某一层级未定义引发错误
 */
Object.defineProperty(Object.prototype,'getter',{
  writable:false,
  enumerable:false,
  configurable:true,
  value:function(arg){
    var arr = arg.split('.')
    console.log(arr)
    var res = this
    // 逐层取值，取到预期结果正常返回，取不到返回null
    for(var i=0;i<arr.length;i++){
      if(arr[i]){
        if(res[arr[i]]){
          res = res[arr[i]]
        }else{
          return null
        }
      }
    }
    return res
  }
})
