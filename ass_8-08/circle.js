class Circle{
	constructor(...arr){              //constructor with rest perameter
		var count=0
		var li = ['radius','color']
		for(var i of arr)
		{
			if(count===li.length)
			{
				break
			}
			this[li[count]]=i         //assigning properties
			count++
		}
	}
	get circleRadius(){              //getter function for radius
		return this.radius
	}
	get circleColor(){               //getter function for color
		return this.color
	}
	set circleRadius(revised_radius){                  //setter function for radius
		if(Number.isInteger(revised_radius)){
			this.radius = revised_radius
		}
	}
	set circleColor(revised_color){                    //setter function for color
		this.color = revised_color
	}
	getArea(){                                                     //function caluclates the area of a circle
		return ((Math.PI)*(Math.pow(this.radius,2))).toFixed(2)
	}
	circle_toString(){                                             //it returns the discription of a class
		return 'circle have radius of '+this.radius+' and '+this.color+' color'
	}
}
circle1= new Circle(25,'red') //creating a circle1 object

console.log('Circle1 color before calling setter function :',circle1.circleColor)
console.log('Circle1 radius before calling setter function :',circle1.circleRadius)
console.log('Circle1 area before calling setter function :', circle1.getArea())
console.log('Circle1 to string method before calling setter function :    ', circle1.circle_toString())
circle1.circleColor = 'blue'
circle1.circleRadius = 35
console.log('*************************************************')
console.log('Circle1 color after calling setter function :',circle1.circleColor)
console.log('Circle1 radius after calling setter function :',circle1.circleRadius)
console.log('Circle1 area after calling setter function :', circle1.getArea())
console.log('Circle1 to string method after calling setter function :    ', circle1.circle_toString())