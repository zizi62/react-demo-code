import React, { useState, useEffect } from 'react';
import styles from './Weather.module.css'
import Preloader from '../common/Preloader/Preloader';


const Weather = (props) => {
    const [cityName, setCity] = useState('');
    let setCityName = (e) => {
        setCity(e.currentTarget.value);
    }

    let getWatherData = (e) => {
        e.preventDefault()
        props.getWatherData(cityName);
        setCity('')
    }

    return (
        <div className={styles.weather}>
            {props.isLoading && <Preloader />}
            <form className={styles.form}>
                <input className={styles.input} type="text" onChange={setCityName} list='cities' value={cityName} placeholder='City' />
                <button className={styles.btnSearch} onClick={getWatherData} disabled={!cityName}>Search...</button>
                <datalist id='cities'>
                    {props.cityList.map((city, i) => {
                        return <option value={city} key={i} />
                    })}
                </datalist >
            </form>
            {props.error !== null 
            ? <div className={styles.error}>
                <p className={styles.errorText}>{props.error}</p>
            </div> 
            :<div className={styles.weaterBox}>
                    {props.cityName && <>
                        <p className={styles.title}>{props.cityName}</p>
                        <img className={styles.weathetImg} src={`http://openweathermap.org/img/w/${props.icon}.png`} alt='icon' />
                        <p><b>Temperature:</b> {props.temp}F</p>
                        <p><b>Wind:</b> {props.wind} meter/sec</p>
                        <p><b>Cloudiness:</b> {props.cloudiness}%</p>
                        <p><b>Precipitation:</b> {props.precipitation}.</p>
                    </>
                    }

                </div>}


        </div>

    )



}





export default (Weather);


