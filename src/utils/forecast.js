const request = require('request')

const forecast = (latitude, longitude, cb) => {
    const url = 'http://api.weatherstack.com/current?access_key=0af72c5bad773a16a737c6181193310b&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            cb('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            cb('Unable to find location', undefined)
        } else {
            cb(undefined, body)
        }
    })
}
// 'It is currently '+ body.current.weather_descriptions + 'At '+ body.location.name + ' with ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.'
module.exports = forecast