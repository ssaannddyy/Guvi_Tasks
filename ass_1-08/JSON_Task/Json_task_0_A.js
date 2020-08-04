//Problem 0 Part A
/*Add height and weight to Fluffy
Fluffy name is spelled wrongly. Update it to Fluffyy
List all the activities of Fluffyy’s catFriends.
Print the catFriends names.
Print the total weight of catFriends
Print the total activities of all cats (op:6)
Add 2 more activities to bar & foo cats
Update the fur color of bar*/
var cat = {
 'name': 'Fluffy',
 'activities' : ['play','eat cat food'],
 'catFriends' : [
{
	'name' : 'bar',
	'activities' : ['be grumpy', 'eat bread omblet'],
	'weight' : 8,
	'furcolor' : 'white'
},
{
	'name' : 'foo',
	'activities' : ['sleep','pre-sleep naps'],
	'weight' : 3
}
 ]
}
//question 1 => adding height and weight to fluffy
console.log('adding height and weight to floffy')
cat['height'] = '2ft'
cat['weight'] = '8'
console.log("*****************************************************************")

//question 2 => updating fluffy to fluffyy
console.log('updating Fluffy')
cat['name'] = 'Fluffyy'
console.log("*****************************************************************")

//question 3 => displaying activites of cat friends
console.log('displaying activities of cats friends')
var len=cat['catFriends'].length
for(var i=0; i<len;i++)
{
	console.log("cat's  friend ",cat['catFriends'][i]['name'],"activities are :",cat['catFriends'][i]['activities'])
}
console.log("*****************************************************************")

//question 4 => displaying cat's friends name
console.log("displaying cat's friends names")
for(var i=0; i<len;i++)
{
	console.log("cat's  friend is  ",cat['catFriends'][i]['name'])
}
console.log("*****************************************************************")

//queston 5 => total weight of cat friends
console.log('Displaying total weight of cat friends')
var total=0
for(var i=0; i<len;i++)
{
	total+=cat['catFriends'][i]['weight']
}
console.log('toatal weight :', total)
console.log("*****************************************************************")

//question 6 => printing all the activites of cats friends

console.log("cat's friends activities")
for(var i=0;i<len;i++)
{
	friend_len=(cat['catFriends'][i]['activities']).length
	for(var j=0;j<friend_len;j++)
	{
		console.log(cat['catFriends'][i]['activities'][i])
	}
}
console.log("*****************************************************************")

//question 7 => adding 2 properties to foo and bar

console.log("adding 2 properties to foo and bar")
cat['catFriends'][0]['activities'][2]='drinks milk and eats meat'
cat['catFriends'][0]['activities'][3]='meow-meow'
cat['catFriends'][1]['activities'][2]='drinks water'
cat['catFriends'][1]['activities'][3]='meow-meow'

console.log("*****************************************************************")

//question 8 => updating furcolor
console.log("updating furcolor")
cat['catFriends'][0]['furcolor']='black'
console.log("*****************************************************************")