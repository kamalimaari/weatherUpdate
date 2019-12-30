import { connect } from 'react-redux';
import {getCityValue} from '../../actions';


const mapDispatchToProps = (dispatch) => {
    return {
        getCityValue: (cityValue) => {
            console.log('cityValue');
            dispatch(getCityValue(cityValue))
        },
    };
};

export default connect(null, mapDispatchToProps);