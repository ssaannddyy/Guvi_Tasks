function getOpposite(num) {
	if(num===0)
	{
		return 0
	}
	else if(isNaN(num))
	{
		return -1
	}
	else
	{
		return -1*num
	}
}
console.log(getOpposite(5))
console.log(getOpposite('num'))
console.log(getOpposite(0))

