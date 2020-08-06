function CountAnimals(tur,horse,pigs) {
	return 2*tur+4*(horse+pigs)
}
var legs = CountAnimals(2,3,5)
console.log(legs)