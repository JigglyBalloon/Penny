import {
    RECEIVE_RESTAURANTS
} from '../../actions/restaurant_actions';

const restaurantReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        default:
            return state;
    }
};

export default restaurantReducer;