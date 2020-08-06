function prime_until_100()
{
	var dummy=[]
	for(var i=2;i<=100;i++)
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
console.log(prime_until_100())