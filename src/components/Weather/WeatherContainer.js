import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getWatherData, getCityListData} from '../../Redux/reducers/weatherReducer';
import Weather from './Weather';
import { getCityList, getTemp, getWind, getCloudiness, getPrecipitation, getIcon, getError, getCityName, getIsLoading } from '../../Redux/selectors/weatherSelectors';

const WeatherContainear = (props) => {
    useEffect(() => {
        props.getCityListData()
    }, []);
    
  let getWatherData =(cityName)=> {
    props.getWatherData(cityName)
  }
  
    return (  
     <Weather {...props} getWatherData={getWatherData}/>
    )
}

let mapStateToProps=(state)=>({
        cityList: getCityList(state),
        temp:getTemp(state),
        wind:getWind(state),
        cloudiness:getCloudiness(state),
        precipitation:getPrecipitation(state),
        icon: getIcon(state),
        error: getError(state),
        cityName:getCityName(state),
        isLoading: getIsLoading(state)
})

let mapDispatchToProps=(dispatch)=>({
        getWatherData: (city)=>{dispatch(getWatherData(city))},
        getCityListData:()=>{dispatch(getCityListData())}  
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainear);


