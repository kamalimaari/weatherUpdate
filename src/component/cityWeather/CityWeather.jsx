import React from "react";
import PropTypes from "prop-types";
import './CityWeather.style.scss';

const CityWeather = ({weatherArray}) => {
    return (
        <div>
            <div className="climate__title">Temperature for your searched city</div>
            <div className="climate__weather">
                {weatherArray.map((data) => {
                    return <div className="climate__weather__details">
                        <div className="climate__weather__date-temperature">
                            <div className="climate__weather__date">Date and Time: {data[0]}</div>
                            <div className="climate__weather__temperature">Temperature: {data[1]}</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

CityWeather.propTypes = {
    weatherArray: PropTypes.shape,
};
export default CityWeather;