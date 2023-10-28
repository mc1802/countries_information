const apiUrl = "https://restcountries.com/v3.1/name/";

const countryName = document.querySelector("#country-name");
const flag = document.querySelector("#flag");
const currency = document.querySelector(".currency p");
const capital = document.querySelector(".capital p");
const continent = document.querySelector(".continent p");
const population = document.querySelector(".population p");

async function updateCountryInfo(country){
    const response = await fetch(`${apiUrl}${country}?fullText=true`);
    let data = await response.json();
    
    countryName.innerHTML = data[0].name.common;
    flag.innerHTML = data[0].flag;
    var currencyCode = Object.keys(data[0].currencies);
    currency.innerHTML = data[0].currencies[currencyCode].name;
    capital.innerHTML = data[0].capital[0];
    continent.innerHTML = data[0].subregion;
    population.innerHTML = Math.round((data[0].population)/1000000)+" Mio.";

}

function callFunc(){
    const input = document.querySelector(".search input");
    var query = input.value;
    updateCountryInfo(query);
    input.value = "";
}

