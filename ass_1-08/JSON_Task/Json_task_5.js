/*Write a function “fromListToObject” which takes in an array of arrays, 
and returns an object with each pair of elements in the array as a key-value pair.*/
var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
//returns object from entries of an array
function fromListToObject(arr) {
	obj={}
	//obj=Object.fromEntries(arr) we can use this as well
	for(var i of arr)
	{
		obj[i[0]]=i[1]
	}
	return obj
}
console.log(fromListToObject(array))