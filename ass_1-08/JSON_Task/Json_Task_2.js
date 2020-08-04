//Write a function called “printAllKeys” which returns an newArray of all the input object’s Keys
var object = {'name': 'RajiniKanth', 'age': 33, 'hasPets' : false}
//returns the array of keys of a object
function printAllKeys(obj)
{
	keys=[]
	//keys = Object.keys(o) we can use this as well
	for(var i in obj)
	{
		keys.push(i)
	}
	return keys
}
console.log(printAllKeys(object))