// Simple weather app using free Weatherapi
const fetch = require('node-fetch');
const url = 'http://api.weatherapi.com/v1/current.json?key=cc44c3e2a3524cdfa2f123819222705&q=London&aqi=no';

const getWeatherData = async () => {
    try {
        let response = await fetch(url)

        if (response.status === 200) {
            return await response.json()
        } else {
            throw new Error('Something bad happened :(')
        }
    } catch (error) { console.log('Connection failed') }
};

getWeatherData()
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error.message)
    });