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
		return this.val1/this.val2
	}
	mod()
	{
		return this.val1 % this.val2
	}
}

var my_cal = new Caluclator(20,10)
console.log("addition" ,my_cal.add())
console.log("subtraction" ,my_cal.sub())
console.log("division" ,my_cal.div())
console.log("multiplication" ,my_cal.mul())
console.log("moduluse" ,my_cal.mod())
