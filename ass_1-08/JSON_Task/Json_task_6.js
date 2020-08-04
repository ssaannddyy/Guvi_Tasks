//Write a function called “transformGeekData” that transforms some set of data from one format to another.
var array = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']],
 [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]]
 //transforms array to another format
 function transformEmployeeData(arr) {
 	var tranformEmployeeList = []
 	for(var i of arr)
 	{
 		obj={}
 		for(var j=0;j<i.length;j++)
 		{
 			obj[i[j][0]]=i[j][1]
 		}
 		tranformEmployeeList.push(obj)
 	}
 	return tranformEmployeeList
}
console.log(transformEmployeeData(array))