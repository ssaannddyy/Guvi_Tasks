//Base class Tv
class Tv{
	constructor(brand,channel=1,inches,on_or_off,volume=50){//constructor properties having brand,channel,inches,on_off,volume......volume and channel has default values
		this.brand=brand
		this.channel=channel
		if(this.channel>=0&&this.channel<=50){ //checking condition for channel that should be in 0 to 50. If condition fails it will in default value
			this.channel=channel
		}
		else{
			this.channel=1
		}
		this.inches=inches
		this.on_or_off=on_or_off
		this.volume=volume
		if(this.volume>100){  //checking condition for the volume that should be in 0 to 100. If condition fails it will in default value
		this.volume=100
		}
		else if(this.volume<0){
			this.volume=0
		}
		else{
			this.volume=volume
		}
	}
	get status(){    //method returns the discription of the TV
		return this.brand+" tv is at channel "+this.channel+" and volume  "+this.volume
	}
	set tv_Volume(n){ //sets the TV volume if the given value is not in range of 0-100 it return 0 for lessthan 0 and 100 for graterthan 100
		if(n>100){
			this.volume=100
		}
		else if(n<0){
			this.volume=0
		}
		else{
			this.volume=n
		}
	}
	set tv_Channel(n){        //sets the TV channel. if it is out of range (0-50) it remains in the same channel 
		if(n>=0&&n<=50){
			this.channel=n
		}
	}
	setdefalt(){
		this.volume=50
		this.channel=1
	}
}
class Led extends Tv{ //LED Tv inherting Tv class
	constructor(brand,channel=1,inches,on_or_off,volume=50,screen_thickness,energy_usage,life_span,refresh_rate){ // passing arguments, first passing base class arguments followed by derived class
		super(brand,channel,inches,on_or_off,volume) // assigining arguments to base class variables
		this.screen_thickness=screen_thickness
		this.energy_usage=energy_usage
		this.life_span=life_span
		this.refresh_rate=refresh_rate
	}
	get viewangle(){ //returns the viweable angles of the TV
		return 'Hirizontal 140 degrees \n vertical 120 degrees'
	}
	get backlight(){ //returns backlight model of the TV
		return 'cold-cathode florescent lamps'
	}
	get status(){ //returns the discription of the Tv using status method of base class using super keyword
		return super.status + " specifications are as below \n screen_thickness is : "+this.screen_thickness+ " \n energy_usage is : "+this.energy_usage+'\n life_span is : '+this.life_span+'\n refresh_rate is : '+this.refresh_rate
	}
}
class Plasma extends Tv{
	constructor(brand,channel=1,inches,on_or_off,volume=50,screen_thickness,energy_usage,life_span,refresh_rate){
		super(brand,channel,inches,on_or_off,volume)
		this.screen_thickness=screen_thickness
		this.energy_usage=energy_usage
		this.life_span=life_span
		this.refresh_rate=refresh_rate
	}
	get viewangle(){
		return 'Hirizontal 120 degrees \n vertical 100 degrees'
	}
	get backlight(){
		return 'cold-cathode florescent lamps'
	}
	get status(){
		return super.status + " specifications are as below \n screen_thickness is : "+this.screen_thickness+ " \n energy_usage is : "+this.energy_usage+'\n life_span is : '+this.life_span+'\n refresh_rate is : '+this.refresh_rate
	}
}


