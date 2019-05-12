const initFunction = function(){
  String.prototype.replaceAll = function(str, target, replace){
    return str.split(target).join(replace);
  }
}

initFunction();