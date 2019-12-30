import React, {useState} from "react";
import PropTypes from 'prop-types';
import './Weather.style.scss';


const Weather = ({getCityValue, history}) => {
    const [city, setCity] = useState("");

    const onFormSubmit = (cityValue) => {
        getCityValue(cityValue);
        history.push('/weatherUpdate');
    };

    return (
        <div className="city">

            <form onSubmit={() => onFormSubmit(city)}>
                <div className="city__title">WEATHER UPDATE</div>
                <div className="city__input">
                    <label className="city__name">
                        Enter the city:
                        <input
                            type="text"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>

    );
};
Weather.propTypes = {
    getCityValue: PropTypes.func,
    history: PropTypes.func,
};

export default Weather;