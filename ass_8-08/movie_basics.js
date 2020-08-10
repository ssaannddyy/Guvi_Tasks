class Movie{
	constructor(name,studio,rating='PG'){
		this.name = name
		this.studio = studio
		this.rating = rating
	}
	getPG(n){                                              // filters the given array and returns the array of movies having r ating PG
		var dummy=n.filter(movie => movie.rating === 'PG')
		return dummy
	}
}
movie1 = new Movie('Casino Royale','Eon Productions','PG13') // creating a object
li= [movie1, new Movie('aravindha','annapurna'), new Movie('IT2','productions','PG'), new Movie('KGF','karnataka studio','R')]
console.log(movie1.getPG(li))



