import *as axios from 'axios';

const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`
})


export const weatherApi = {

    async getWeather(citiName) {
        try {
            let response = await instance.get(`weather?q=${citiName}&units=Imperial&appid=3c553379c9ee0a9b7b9aecdcd96a23d2`)
            return response.data
        } catch (error) {
            if (error.response.status === 404) {
                return Promise.reject("City not found")
            } else {
                return Promise.reject("Some error")
            }
        }
    }
}