/*1. Loop over the accidents array. Change atFaultForAccident from true to false.
2. Print the dated of my accidents*/
var myCar = {
 'make': 'Bugatti',
 'model': 'Bugatti La Voiture Noire',
 'year': 2019,
 'accidents': [
 {
 'date': '3/15/2019',
 'damage_points': 5000,
 'atFaultForAccident': true
 },
 {
 'date': '7/4/2022',
 'damage_points': 2200,
 'atFaultForAccident': true
 },
 {
 'date': '6/22/2021',
 'damage_points': 7900,
 'atFaultForAccident': true
 }
 ]
}
len_acc_arr=myCar['accidents'].length // length of accidents array
// question 1=> changing atFaultForAccident from true to false
console.log("changing atFaultForAccident from true to false")
for(var i=0;i<len_acc_arr;i++)
{
	if(myCar['accidents'][i]['atFaultForAccident']===true)
	{
		myCar['accidents'][i]['atFaultForAccident']=false
	}
}
console.log("*********************************************************************")
//question 2 => prit the date of accidents
console.log("printing accident dates")
for(var i=0;i<len_acc_arr;i++)
{
	console.log("Accident date :",myCar['accidents'][i]['date'])
}
console.log("*********************************************************************")
