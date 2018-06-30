
Array.prototype.even=function(){
    var arr=new Array();
    var len =this.length;
    var arr2=this;

    setTimeout(function(){
        for(var i=0;i<len;i++){
            if(arr2[i]%2==0){
                arr.push(arr2[i]);
            }
        }
        console.log(arr);
    },1000)
}

Array.prototype.odd=function(){
    var arr=new Array();
    var len =this.length;
    var arr2=this;

    setTimeout(function(){
        for(var i=0;i<len;i++){
            if(arr2[i]%2!=0){
                arr.push(arr2[i]);
            }
        }
        console.log(arr);
    },1000)
}


console.log('start');
[1,2,3,4,5,6,7,8].odd();
[1,2,3,4,5,6,7,8].even();
console.log('end');