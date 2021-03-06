export const getCityList = (state)=> state.weatherPage.cityList;
export const getTemp = (state)=> state.weatherPage.weatherData.temp;
export const getWind = (state)=> state.weatherPage.weatherData.wind;
export const getCloudiness = (state)=> state.weatherPage.weatherData.cloudiness;
export const getPrecipitation = (state)=> state.weatherPage.weatherData.precipitation;
export const getIcon = (state)=> state.weatherPage.weatherData.icon;
export const getError = (state)=> state.weatherPage.error;
export const getCityName = (state)=> state.weatherPage.cityName
export const getIsLoading = (state)=> state.weatherPage.isLoading
