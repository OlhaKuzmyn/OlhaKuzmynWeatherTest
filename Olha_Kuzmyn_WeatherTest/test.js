
// async function getWeather(apiToken) {
    //     // try {
        //         let resultWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiToken}`)
        //             // .then(response => {
            //             //     // console.log(resultWeather)
            //             //     if (response.ok) {
                //             //         // resultWeather.json()
                //             //         console.log(response)
                
                //             //     } else {
                    //             //         if(response.status === 401) {
                        //             //             throw new Error('401, Not Authorised')
                        //             //         }
                        //             //     }
                        //             // })
                        //             // .then(resultWeather => resultWeather.json())
                        //             //     console.log(resultWeather)
                        //             .then(resultWeather => resultWeather.ok ? resultWeather : resultWeather.json().then(err => Promise.reject(err)));
                        
                        
                        //     // } catch (error) {
                            //     //     console.log(error.message)
                            //     // }
                            //         console.log(resultWeather)
                            // };
                            
                            // getWeather(apiToken)
                            //     .then(resWeather => resWeather.json())
                            //     .catch(err => console.log(err))
                            
                            //     console.log(resWeather)
                            
                            
                            // let API = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6cb6bf751468992a4e8542551b45468f"
                            
                            // let fetchOk = api => fetch(api)
                            //   .then(res => res.ok ? res : res.json().then(err => Promise.reject(err)));
                            
                            // let fetchOk(API) =>()
                                //   .then(response => response.json())
                                //   .catch(err => console.log(err));
                                //   console.log(response)
                                
                            
                            
let apiToken = "6cb6bf751468992a4e8542551b45468f";

async function getWeather(apiToken) {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiToken}`)
        //     .then(response => {
        //         if (response.ok){
        //             return true
        //         } else {
        //             throw new Error(response.statusText)
        //         }
        //     })
        // console.log(response)

        let res = await response.json()
        console.log(res)

        // if (response){
        //     let resultWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiToken}`)
        //     .then(resultWeather => (resultWeather.json()))
        //     console.log(resultWeather)
        // }

    }

getWeather(apiToken)


// async function postWeather(apiToken, weatherLimit) {
//     await getWeather(apiToken, weatherLimit)
//         .then (() => {
//             try{
//                 fetch("https://671fa196e7a5792f052ef74a.mockapi.io/weatherlon/weather", {
//                     method: "POST",
//                     headers: {'content-type':'application/json'},
//                     body: JSON.stringify(weatherLimit)
//                 })
//             } catch (error) {
//                 console.error(error.message)
//             }
//     })
// } 
    