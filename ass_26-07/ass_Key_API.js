var url= 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=1c65083845b7886e71e4199fd96c7171';

fetch(url)
.then(res=>res.json())
.then(Info=>console.log(Info))