// main function where we will pass a parameter and another function
let main_fun= function(a,b)
{
	let input1=10
	let input2=80
	console.log(b)
	return (arr[a-1])(input1,input2) // returning corresponding child function
}
var arr=[add,sub,mul]
console.log(main_fun(1,add))
console.log(main_fun(2,sub))
console.log(main_fun(3,mul))
function add(a,b) // add function
{
	return a+b
}
function sub(a,b) //subtraction function
{
	return a-b
}
function mul(a,b) // multiplication function
{
	return a*b
}


