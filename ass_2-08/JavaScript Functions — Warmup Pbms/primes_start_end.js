function prime_until_100(start,end)
{
	var dummy=[]
	for(var i=start;i<=end;i++)
	{
		count=0
		for(var j=1;j<=i;j++)
		{
			if(i%j===0)
			{
				count++
			}
		}
		if(count===2)
		{
			dummy.push(i)
		}
	}
	return dummy
}
console.log(prime_until_100(3,5))