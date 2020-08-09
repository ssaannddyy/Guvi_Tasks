// main function where we will pass a parameter and another function
let main_fun= function(a,b)
{
	let input1=10
	let input2=80
	console.log(b)
	return (arr[a-1])(input1,input2) // returning corresponding child function
}
var arr=[add,sub,mul]
var count=1
//arr.forEach(item => console.log(main_fun(count++,item)))
console.log(arr[0]())

function add() // add function
{
	return 'hi'
}
function sub(a,b) //subtraction function
{
	return a-b
}
function mul(a,b) // multiplication function
{
	return a*b
}


