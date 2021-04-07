console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const mainLocation = document.querySelector('#mainLocation')
const timeZone = document.querySelector('#timeZone')
const city = document.querySelector('#city')
const forecast = document.querySelector('#forecast')



const changeInterface = (data)=> {
    document.querySelector('#mainLocation').textContent = `${data.location.country}`
    document.querySelector('#timeZone').textContent = data.location.localtime;
    document.querySelector('#city').textContent = data.location.name
    document.querySelector('#forecast').textContent = `It is currently  ${data.current.weather_descriptions} At ${data.location.name} with ${data.current.temperature} degress out. There is a ${data.current.precip}% chance of rain.`
}
const changeMainLine = (main) => {
    mainLocation.textContent = main
    timeZone.textContent = ''
    city.textContent = ''
    forecast.textContent = ''
}


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    changeMainLine('Loading...');
    console.log(location)
    fetch(`http://127.0.0.1:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                changeMainLine(data.error)
            } else {
                const dataExp = data.forecast;
                console.log(dataExp)
                changeInterface(dataExp)
            }
        })

    })
})