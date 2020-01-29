function getWeather(woeid){

fetch
(`https://www.metaweather.com/api/location/${woeid}/`)
.then(result=> 
    {
     
        return result.json();
    })
    .then(
        data=>{
            console.log(data);
            const today=data.consolidated_weather[0];
            console.log(today.humidity);
        }
    ).then(
        error=>{
            console.log(error);
        }
        
    )
}

getWeather(44418);



