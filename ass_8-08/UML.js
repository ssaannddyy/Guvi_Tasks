//Base class Bank

class Bank{
	constructor(code,address){ // passing code and address arguments
		this.code=code
		this.address=address
	}
	managers(){
	}
	maintains(){
	}
}



//Atm class extends Bank class
class Atm extends Bank{
	constructor(code,address,location,managed_by,Bank){
	 //passing bank class arguments and calling them using super keyword and passing atm class arguments
		super(code,address)
		this.location=location
		this.managed_by=managed_by
	}
	identifiers(){

	}
	transactions(){

	}
}



//Customer class extending Bank class
class Customer extends Bank{  
//passing bank class arguments and calling them using super keyword and passing customer class arguments using Rest
	constructor(code,address,Atm,...arr){
		var li=['name','date_of_birth','card_number','pan','location','managed_by'] // variables array
		super(code,address)
		var count=0
		for(var i of arr){                                //assigning values to the variables
			if(count===li.length){
				break
			}
			this[li[count]]=i
			count++
		}
		this.atm = new Atm(this.code,this.address,this.location,this.managed_by) 
		// creating a new Atm object, "as multiple inheritance is not possible in JS"
	}
	verify_Password(){

	}
}


//account class extends customer class
class Account extends Customer{
	constructor(code,address,Atm,name,date_of_birth,card_number,pan,location,managed_by,number,balance){
	//passing customer class arguments and calling them using super keyword and passing account class arguments
		super(code,address,Atm,name,date_of_birth,card_number,pan,location,managed_by)
		this.number= number
		this.balance = balance
	}
	deposit(){

	}
	withdrawl(){

	}
	createTransaction(){

	}
}


//Atm_transaction class extending Account
class Atm_Transactions extends Account{
	constructor(code,address,Atm,name,date_of_birth,card_number,pan,location,managed_by,number,balance,transaction_ID,date,type,amount,postbalance){ 
		
		//passing account class arguments and calling them using super keyword and passing atm_transaction class argumentssuper(code,address,Atm,name,date_of_birth,card_number,pan,location,managed_by,number,balance)
		this.transaction_ID = transaction_ID
		this.date = date
		this.type=type
		this.amount=amount
		this.postbalance=postbalance
	}
	modifier(){}
}


//current_Account class extending account class
class Current_Account extends Account{
	constructor(code,address,Atm,name,date_of_birth,card_number,pan,location,managed_by,number,balance){
		//passing account class arguments and calling them using super keyword and passing current_account class arguments
		super(code,address,Atm,name,date_of_birth,card_number,pan,location,managed_by,number,balance)
	}
	withdrawl(){

	}
}


//savings_account class extending account class
class Savings_Account extends Account{
	constructor(code,address,Atm,name,date_of_birth,card_number,pan,location,managed_by,number,balance){
		//passing account class arguments and calling them using super keyword and passing savings_account class arguments
		super(code,address,Atm,name,date_of_birth,card_number,pan,location,managed_by,number,balance)
	}
}
