import axios from "axios";

const apiKey = "8e2d67809b938ff8d396c4db3d44298f";


const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const getWeather = async (lat, lon) => {
    try {
        const response = await axios.get(baseUrl, {
            params: {
                lat: lat,
                lon: lon,
                appid: apiKey,
                units: 'metric'
            }
        });
        console.log('Weather retrieved for:', response.data.name)
        return response.data;
    } catch (error) {
        console.log('Error retrieving weather data:', error)
        throw error;
    }
}


const getIcon = async (iconId) => {
    const iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`
    try {
        const response = await axios.get(iconUrl)
        return response.data;
    } catch (error) {
        console.log("Error retrieving weather icon", error)
    }
}

export default {
    getWeather,
    getIcon
}