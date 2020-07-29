//var fetch = require('node-fetch');
var url =  "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com"
var proxy = 'https://cors-anywhere.herokuapp.com/'
fetch(proxy+url)
    .then(res => res.json())
    .then(Info => console.log(Info));