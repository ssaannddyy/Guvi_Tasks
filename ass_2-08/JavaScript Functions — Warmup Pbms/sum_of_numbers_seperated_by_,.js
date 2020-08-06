console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
	var dummy=s.split(",")
	var li=[]
	var count=0
	for(var i=0;i<dummy.length;i++)
	{
    	li.push((+dummy[i]))
	}
	for(var j of li)
	{
		count=count+j
	}
	return count
}