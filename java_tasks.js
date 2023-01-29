var min = function(list){
    let m = Math.min.apply(Math, list);
    return m;
}

var max = function(list){
    let n = Math.max.apply(Math, list);
    return n;
}
console.log(min([6,8,3,2]));
