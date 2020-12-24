import React from 'react';

function WeatherItem(props) {
    return (
        <div>
            <div className="w-full p-2">
                <div className="flex flex-col items-start">
                    <div className="flex">
                        <p className="text-xl lg:text-2xl xl:text-2xl font-semibold">{props.title}</p>
                    </div>
                    <p className="text-2xl lx:text-4xl xl:text-4xl font-thin">{props.value}</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherItem;