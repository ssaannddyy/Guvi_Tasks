class Caluclator{
	constructor(val1,val2){
		this.val1=val1
		this.val2=val2
	}
	add()
	{
		return this.val1+this.val2
	}
	sub()
	{
		return this.val1-this.val2
	}
	mul()
	{
		return this.val1*this.val2
	}
	div()
	{
		return this.a/this.b
	}
	mod()
	{
		return this.a%this.b
	}
}

var my_cal = new Caluclator(20,10)
li=[add,sub,mul,div,mod]
li.forEach((element) =>
	console.log(my_cal.element()))