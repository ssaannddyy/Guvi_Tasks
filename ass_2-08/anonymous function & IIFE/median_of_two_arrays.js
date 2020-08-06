var arr1=[1,12,16,26,38]
var arr2=[2,13,17,45,30]
var arr= [...arr1,...arr2] // conacting two arraies
arr.sort()
var median= function(arr){ //function to find median
	len=arr.length
	if(len%2===0)
	{
		return (arr[len/2]+arr[(len+2)/2])/2
	}
	else
	{
		return arr[(len+1)/2]
	}
}
console.log(median(arr))

//dealing with IIFE function

var IIFE_median=(function(len){if(len%2===0){return (arr[len/2]+arr[(len+2)/2])/2 } else {return arr[(len+1)/2]}})(len)
console.log(IIFE_median)