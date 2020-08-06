var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
	count1=0
	count2=0
	for(var i of arr)
	{
		if(i>0)
		{
			count1+=i
		}
		else
		{
			count2+=i
		}
	}
	return [count1,count2]
}
console.log(ar2(arr))