/*var min = function(list){
    let m = Math.min.apply(Math, list);
    return m;
}

var max = function(list){
    let n = Math.max.apply(Math, list);
    return n;
}
console.log(min([6,8,3,2]));*/
function grow(x){
    return x.reduce((a, b)=> a * b,1);
  }
  console.log(grow([4,6,7,8]));
