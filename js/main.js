//Form Submission
let form = document.querySelector('#FormData')

// Geting data with Axios
const getData = async() =>{
    let city=document.querySelector("#city").value;
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=340ec83fa3807f38040b8ae760b69888`)
    return response.data
}

//create const to hold our DOM elements for later use
const DOM_ELEMENTS = {
    weather_data:'#weather-data'
}

// Creation of Range List
const create_list = (high,low,forecast,humidity) => {
    const html= `<a href="#" class="list-group-item list-group-item-action list-group-item-light" style="justify-content:space-between"> ${high}${low}${forecast}${humidity}</a>`;
    document.querySelector(DOM_ELEMENTS.weather_data).insertAdjacentHTML('beforeend',html) // allows search where you can choose where to inject html elem  above
}

const load_data= async()=>{
    const weather1_data= await getData(); //waiting for data, once it gets data it will use response.data return from getData()
    for (i = 0; i < 1; i++){
            // Getting high temp
            let first_high = weather1_data.main.temp_max
            let high = Math.round((first_high-273.15) * 1.8 + 32);
            let display_high = document.createElement("td")
            console.log(display_high)
            display_high.innerHTML = high + "℉"
            document.querySelector(`#table-row-${i}`).append(display_high)

            // Getting low temp
            let first_low = weather1_data.main.temp_min
            let low = Math.round((first_low-273.15) * 1.8 + 32);
            let display_low = document.createElement("td")
            console.log(display_low)
            display_low.innerHTML = low + "℉"
            document.querySelector(`#table-row-${i}`).append(display_low)

            // Getting forecast
            let forecast = weather1_data.weather[0].main
            let display_forecast = document.createElement("td")
            console.log(display_forecast)
            display_forecast.innerHTML = forecast
            document.querySelector(`#table-row-${i}`).append(display_forecast)

            // Getting humidity
            let humidity = weather1_data.main.humidity
            let display_humidity = document.createElement("td")
            console.log(display_humidity)
            display_humidity.innerHTML = humidity
            document.querySelector(`#table-row-${i}`).append(display_humidity)
    }
    // console.log(weather1)
    // weather1.forEach(element=>create_list(element.position,element.Driver.givenName + " " + element.Driver.familyName,element.Driver.nationality,element.Constructors[0].name,element.points)) // data will be array, so we need to pull id,name from each element, pass those into create_list above
}

//add event listener
form.addEventListener('submit',(event)=>{
    let city=document.querySelector("#city").value;
    event.preventDefault()
    return city
})