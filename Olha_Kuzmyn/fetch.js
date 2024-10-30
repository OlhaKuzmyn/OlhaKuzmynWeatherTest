// api token for open weather api
let apiToken = "6cb6bf751468992a4e8542551b45468f";

// starting object to upload weather to mock api
let weatherLimit = {
    date: new Date().toJSON().slice(0, 10)
};

// function to get weather from open weather api
async function getWeather(apiToken, weatherLimit) {

// fetc to get all data
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiToken}`)
            .then(response => {
                if (response.ok){
                    return response
                } else {
                    throw new Error(response.statusText)
                }
            })

// if no errors await for json response
    let resultWeather = await response.json()

// iterate through json to create required object
        for (const [key, value] of Object.entries(resultWeather)) {
            if (key === "name") {
                weatherLimit["city"] = value
            }
            if (key === "weather") {
                weatherLimit["weatherDescription"] = value[0].description
            }
            if (key === "main") {
                weatherLimit["temperatureC"] = Math.round(value.temp - 273.15)
                weatherLimit["humidity"] = value.humidity
            }
            if (key === "wind") {
                weatherLimit["windSpeed"] = value.speed
            }
        }
        
};

// function to post transformed object to mockapi
async function postWeather(apiToken, weatherLimit) {
    await getWeather(apiToken, weatherLimit)
        .then (() => {
                fetch("https://671fa196e7a5792f052ef74a.mockapi.io/weatherlon/weather", {
                    method: "POST",
                    headers: {'content-type':'application/json'},
                    body: JSON.stringify(weatherLimit)
                })
                .then(res => {
                    if (res.ok) {
                        console.log(res.statusText)
                    }
                }).catch(error => {
                    console.log(error)
                })
    })
} 

postWeather(apiToken, weatherLimit)



