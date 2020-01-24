const keys = {
    city: 'city'

}

export const localStorageWeatherData = {
    saveCity(cityList) {
        let cityAsString = JSON.stringify([...cityList].filter((city, i) => i < 3))
        localStorage.setItem(keys.city, cityAsString)

    },

    getCityList() {
        const cityList = JSON.parse(localStorage.getItem(keys.city))
        return cityList || []
    }

}

