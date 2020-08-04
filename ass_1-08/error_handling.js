function XmlHttpRequest()
{
var request = new XMLHttpRequest() //creats the new XMLHttpRequest function
var url_string = 'https://dog.ceo/api/breeds/list/all';
request.open('GET',url_string , true) 
request.send();
//parse the Json document and prints the data(JSON) in console
request.onload = function() {
var data = JSON.parse(this.response)
console.log(data);
}
}
try{
	XmlHttpRequest()
}
catch(err){
	console.log(err)
}