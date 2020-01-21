
import { weatherApi } from '../../api/weatherApi';
import { localStorageData } from '../../api/localStorageData';

const SET_WEATHER = 'weatherReducer/SET-WEATHER';
const SET_CITY = 'weatherReducer/SET-CITY';
const SET_CITIES = 'weatherReducer/SET-CITIES';
const SET_ERROR = 'weatherReducer/SET-ERROR';
const SET_LOADING_STATUS = 'weatherReducer/SET-LOADING-STATUS';


const initianState = {
    cityName: '',
    cityList: [],
    weatherData: {
        temp: null,
        wind: null,
        cloudiness: null,
        precipitation: null,
        icon: null
    },
    isLoading: false,
    error: null

}


const weatherReducer = (state = initianState, action) => {

    switch (action.type) {
        case SET_WEATHER: {
            return {
                ...state, weatherData: {
                    ...state.weatherData,
                    temp: action.temp,
                    wind: action.wind,
                    cloudiness: action.cloudiness,
                    precipitation: action.precipitation,
                    icon: action.icon
                },
                cityName: action.cityName,
                error: null
            }
        }
        case SET_CITY: {

            return {
                ...state, cityList: [action.cityName, ...state.cityList]
            }
        }

        case SET_CITIES: {
            return {
                ...state, cityList: action.cities
            }
        }
        case SET_ERROR: {
            return {
                ...state, error: action.error
            }
        }
        case SET_LOADING_STATUS: {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

const setWeather = (temp, wind, cloudiness, precipitation, icon, cityName) => ({
    type: SET_WEATHER,
    temp: temp,
    wind: wind,
    cloudiness: cloudiness,
    precipitation: precipitation,
    icon: icon,
    cityName: cityName.toUpperCase()
})
const setCityName = (cityName) => ({ type: SET_CITY, cityName: cityName })
const setCities = (cities) => ({ type: SET_CITIES, cities: cities })
const setError = (message) => ({ type: SET_ERROR, error: message })
const setLoadingStatus = (status) => ({ type: SET_LOADING_STATUS, isLoading: status })


export const getWatherData = (cityName) => async (dispatch, getState) => {
    dispatch(setLoadingStatus(true))
    try {
        let data = await weatherApi.getWeather(cityName)
        dispatch(setWeather(data.main.temp, data.wind.speed, data.clouds.all, data.weather[0].description, data.weather[0].icon, cityName))
        let isCity = getState().weatherPage.cityList.some(city => city.toUpperCase() === cityName.toUpperCase())
        !isCity && dispatch(setCityName(cityName))
        !isCity && localStorageData.saveCity(getState().weatherPage.cityList)
        dispatch(setError(null))

    } catch (error) {
        dispatch(setError(error))
    }

    dispatch(setLoadingStatus(false))

}
export const getCityListData = () => (dispatch) => {
    let cities = localStorageData.getCityList();
    dispatch(setCities(cities))
}

export default weatherReducer;