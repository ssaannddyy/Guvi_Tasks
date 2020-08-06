var k=2
var arr=[1,2,3,4,5,6]
result=[]
var rotate=function(k){             //rotating array using ananomus function
	for(var i=k;i<arr.length;i++)
	{
		result.push(arr[i])
	}
	for(var j=0;j<k;j++)
	{
		result.push(arr[j])
	}
	return result
}
var output=rotate(k)
console.log(output)

//dealing with IIFE function
var result1=[]

var output1=(function(arr,k){for(var i=k;i<arr.length;i++){result1.push(arr[i])}for(var j=0; j<k;j++){result1.push(arr[j])}return result1})(arr,k)
console.log(output1)
