// function getWeather(woeid){

// fetch
// (`https://www.metaweather.com/api/location/${woeid}/`)
// .then(result=> 
//     {
     
//         return result.json();
//     })
//     .then(
//         data=>{
//             console.log(data);
//             const today=data.consolidated_weather[0];
//             console.log(today.humidity);
//         }
//     ).then(
//         error=>{
//             console.log(error);
//         }
        
//     )
// }

// getWeather(44418);

//  async  function getWeather(woeid){

//     try{
//         const result= await fetch(`https://www.metaweather.com/api/location/${woeid}/`);
//         const data=await result.json();
//         console.log(data);
//         return data;
//     } catch(error){
//         console.log(error);
//     }
//  }
//  let dataLondon;
// getWeather(44418).then(data=>{
//     dataLondon=data;
//     console.log(dataLondon);
// });



$(document).ready(function(){
    $("select.custom-select").change(function(){
        let value= $(this).children("option:selected").val();
       if(value==2){
        async  function getWeather(woeid){

            try{
                const result= await fetch(`https://www.metaweather.com/api/location/${woeid}/`);
                const data=await result.json();
                console.log(data);
                return data;
            } catch(error){
                console.log(error);
            }
         }
         let dataLondon;
        getWeather(44418).then(data=>{
            dataLondon=data;
            console.log(dataLondon);
        });
       }else{
           console.log("test2");
       }
    });
});
 


