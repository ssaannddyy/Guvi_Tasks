var arr=[2,3,4,5,6,7,8,9] // input array
// anonymous function to find odd numbers in array
var odd = function(input_number){
	if(val%2===1) // conditional check for odd number
		{
			console.log(val)
		}
	}
for(val of arr)
{
	odd(val)
}
 //calling anonymoys function
console.log("********************************************")
// dealing with IIFE function
for(var val of arr)
{
	let dummy=(function(x){if(x%2===1){return x}})(val) //IIFE function
	if(dummy!==undefined)
	{
		console.log(dummy)
	}
}