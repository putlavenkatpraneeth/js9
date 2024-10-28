var ip=[3,5,10,15,23,22,25,26];
var op=[]
for(i in ip){
    if(ip[i]%5==0)
        op.push(ip[i])
       // console.log(ip[i]);
}
console.log(op);//[ 5, 10, 15, 25 ]


var arr=["htmL","csS","javascrIPt","react","angulaR","nodE","EXPResS"];
var arr1=[]
for(i in arr){
    if(arr[i].at(-1)==arr[i].at(-1).toUpperCase())
        arr1.push(arr[i])
        //console.log(arr[i])
}
console.log(arr1);//[ 'htmL', 'csS', 'angulaR', 'nodE', 'EXPResS' ]


var arr=["html","css","react","js","angular"];
var arr2=[]
for(i in arr){
    if(i%2==0)
        //console.log(arr[i].toUpperCase())
    arr2.push(arr[i].toUpperCase())
}
console.log(arr2);//HTML
//REACT
//ANGULAR