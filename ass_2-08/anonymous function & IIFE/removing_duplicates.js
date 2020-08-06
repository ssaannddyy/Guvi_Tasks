var arr=[1,2,3,1,2,3,4,5,6]
var duplicate_check=function(arr,i){                //created anonumus function for checking duplicates
	if(arr.indexOf(i)===arr.lastIndexOf(i))
	{
		return true
	}
	else
	{
		return false
	}
}
var result=arr.filter((item)=>{return duplicate_check(arr,item)}) 
console.log(result)

//dealing with IIFE function to delete duplicates
var result1=arr.filter((value)=>{return (function(arr,i){if(arr.indexOf(i)===arr.lastIndexOf(i)){return true}})(arr,value)})//using IIFE function to delete duplicates
console.log(result1)

