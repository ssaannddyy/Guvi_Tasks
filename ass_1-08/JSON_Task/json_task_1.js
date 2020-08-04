//Write a function called “printAllValues” which returns an newArray of all the input object’s values
var object = {'name': 'RajiniKanth', 'age': 33, 'hasPets' : false}
//returns the array of values of a object
function printAllValues(obj)
{
	values=[]
	//values=Object.values(o) we can use as well
	for(var i in obj)
	{
		values.push(obj[i])
	}
	return values
}
console.log(printAllValues(object))
