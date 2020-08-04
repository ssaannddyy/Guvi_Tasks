/*Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.*/
var array = ['GUVI', 'I', 'am', 'Geek']
//returns a object with key as 1st element in array and value as last element in array
function transformFirstAndLast(arr) {
	obj={}
	obj[arr[0]]=arr[arr.length-1]
	return obj
}
console.log(transformFirstAndLast(array))