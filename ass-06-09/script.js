//The main container class
var mainCont = document.createElement('div');
mainCont.setAttribute('class','container')

//Method when the button is clicked to show current weather
var getWeather =function (city,countrycode,country){
    console.log(city,countrycode,country)
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+","+countrycode+"&appid=4822dd660fdd5d96710f16d612cc5843")
        .then(function(response){
            return(response.json());
        })
        .then((data) =>{
            alert("Current weather in " + city +"," + country +"\nWeather: " + data.weather[0].main + "\nWeather description: " + data.weather[0].description + "\nTemperature: " + (data.main.temp-273.15).toFixed(2) + "\xBAC\nPressure: " + data.main.pressure + "mb\nHumidity: " + data.main.humidity + "%\nWind Speed: " + data.wind.speed + "m/s")
        })
        .catch((error) =>{
            console.log(error)
        })
}

fetch("https://restcountries.eu/rest/v2/all")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        var Rowdiv = document.createElement('div');
        Rowdiv.setAttribute('class','row');

        //Code to add column and card elements for each country
        data.forEach(element => {

            var Coldiv = document.createElement('div');
            Coldiv.setAttribute('class','col-lg-4 col-sm-12 mt-3')

            var card = document.createElement('div');
            card.setAttribute('class','card bckgroundCard');
            card.style.width = '100%'

            var cardheader = document.createElement('div');
            cardheader.setAttribute('class','card-header bg-dark text-white text-center');
            cardheader.innerHTML = element.name;

            var flagimage = document.createElement('img');
            flagimage.setAttribute('src',element.flag);
            flagimage.setAttribute('class','card-img-top mx-auto mt-4');
            flagimage.style.width = '90%'
            flagimage.style.height = '150px'
            

            var cardbody = document.createElement('div');
            cardbody.setAttribute('class','card-body text-center text-light');

            var capital = document.createElement('p');
            capital.setAttribute('class','card-text');
            capital.innerText = "Capital: " + element.capital;

            var region = document.createElement('p');
            region.setAttribute('class','card-text');
            region.innerText = "Region: " + element.region;

            var concode = document.createElement('p');
            concode.setAttribute('class','card-text');
            concode.innerText = "Country code: " + element.alpha3Code;

            var button1 = document.createElement('a');
            button1.setAttribute('class','btn btn-outline-light');
            button1.setAttribute('href','#');
            button1.setAttribute('onClick',"getWeather('" + element.capital +"','" + element.alpha3Code + "','" + element.name+"')")
            button1.innerText = 'Click for weather'

            console.log(element.name)

            cardbody.append(capital,region,concode, button1)

            card.append(cardheader,flagimage,cardbody);

            Coldiv.appendChild(card);
            Rowdiv.appendChild(Coldiv);

        });

        mainCont.appendChild(Rowdiv);
    })
    .catch(function(error){
        console.log(error);
    })

document.body.appendChild(mainCont);