import { connect } from 'react-redux';
import { weatherArray } from '../../utils/ReduxSelectors';

const mapStateToProps = function(state) {
    return {
        weatherArray: weatherArray(state),
    };
};

export default connect(
    mapStateToProps,
    null
);
