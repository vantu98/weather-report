import React from 'react';
import WeatherItem from './WeatherItem';

function convertTimeStamp(timestamp) {
    let date = new Date(timestamp * 1000);

    return date.toLocaleTimeString();
}

function convertWindSpeed(windSpeed) {
    return Math.trunc(windSpeed * 3.6)
}

var degToCard = function (deg) {
    if (deg > 11.25 && deg <= 33.75) {
        return "NNE";
    } else if (deg > 33.75 && deg <= 56.25) {
        return "ENE";
    } else if (deg > 56.25 && deg <= 78.75) {
        return "E";
    } else if (deg > 78.75 && deg <= 101.25) {
        return "ESE";
    } else if (deg > 101.25 && deg <= 123.75) {
        return "ESE";
    } else if (deg > 123.75 && deg <= 146.25) {
        return "SE";
    } else if (deg > 146.25 && deg <= 168.75) {
        return "SSE";
    } else if (deg > 168.75 && deg <= 191.25) {
        return "S";
    } else if (deg > 191.25 && deg <= 213.75) {
        return "SSW";
    } else if (deg > 213.75 && deg <= 236.25) {
        return "SW";
    } else if (deg > 236.25 && deg <= 258.75) {
        return "WSW";
    } else if (deg > 258.75 && deg <= 281.25) {
        return "W";
    } else if (deg > 281.25 && deg <= 303.75) {
        return "WNW";
    } else if (deg > 303.75 && deg <= 326.25) {
        return "NW";
    } else if (deg > 326.25 && deg <= 348.75) {
        return "NNW";
    } else {
        return "N";
    }
}

function Weather(props) {
    const { data } = props;
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    return (
        <div className="w-full">
            <div className="container mx-auto py-8 px-2">
                <h1 className="font-thin text-3xl lg:text-5xl xl:text-5xl text-center">Weather report</h1>
                <div className="w-full lg:w-1/2 xl:w-1/2 p-4 border shadow-md rounded-lg bg-transparent mx-auto my-4">
                    <div className="flex justify-between items-center">
                        <div className="text-left">
                            <h2 className="text-2xl lx:text-3xl xl:text-3xl font-semibold">{data.name}</h2>
                            <p className="text-5xl font-thin my-2">{data.main.temp} &#8451;</p>
                            <p className="text-2xl font-thin capitalize">{data.weather[0].description}</p>
                        </div>
                        <div className="">
                            <img src={iconUrl} alt="weather icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-8 px-2">
                <div className="w-full lg:w-1/2 xl:w-1/2 p-4 border shadow-md rounded-lg bg-transparent mx-auto my-4">
                    <div className="grid grid-cols-2 gap-4">
                        <WeatherItem title='Sun Rise' value={convertTimeStamp(data.sys.sunrise)} />
                        <WeatherItem title='Sun Set' value={convertTimeStamp(data.sys.sunset)} />
                        <WeatherItem title='Temp Min' value={`${data.main.temp_min} ℃`} />
                        <WeatherItem title='Temp Max' value={`${data.main.temp_max} ℃`} />
                        <WeatherItem title='Wind Speed' value={`${degToCard(data.wind.deg)} ${convertWindSpeed(data.wind.speed)} km/h`} />
                        <WeatherItem title='Feel Like' value={`${data.main.feels_like} ℃`} />
                        <WeatherItem title='Pressure' value={`${data.main.pressure} hPa`} />
                        <WeatherItem title='Humidity' value={`${data.main.humidity} %`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;