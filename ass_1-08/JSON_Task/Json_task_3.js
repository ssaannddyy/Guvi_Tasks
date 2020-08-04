//Write a function called “convertObjectToList” which converts an object literal into an array of arrays
var object = {'name': 'ISRO', 'age': 35, 'role': 'Scientist'}
//returns the array of key,value pair arraies of an object
function convertObjectToList(obj)
{
	obj_to_list=[]
	//obj_to_list=Object.entries(obj)
	for(var i in obj)
	{
		obj_to_list.push([i,obj[i]])
	}
	return obj_to_list
}
console.log(convertObjectToList(object))