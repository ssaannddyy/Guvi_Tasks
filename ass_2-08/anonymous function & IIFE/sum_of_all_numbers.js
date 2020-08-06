var arr=[1,2,3,4,5]
var total_sum=0
var sum= function(a,b){ //function returns sum of every element
	return a+b
}
for(var i of arr)
{
	total_sum=sum(total_sum,i)
}
console.log(total_sum)
//dealim\ng with IIFE function
var IIFE_total_sum=0
for(var j of arr)
{
	IIFE_total_sum=(function(a,b){return a+b})(IIFE_total_sum,j) //IIFE function
}
console.log(IIFE_total_sum)

