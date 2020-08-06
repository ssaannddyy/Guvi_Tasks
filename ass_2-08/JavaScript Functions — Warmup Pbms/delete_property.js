obj={'mykey':'value'}
function removeProperty(obj, key){
	delete obj[key]
	return obj
}
console.log(removeProperty(obj,'mykey'))