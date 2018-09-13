import { types } from './actions';

const initState = {
    count1: 0,
    count2: 0
}

export default (state = initState, action) => {
    switch(action.type){
        case types.INCREMENT:
            return {
                ...state,
                count1: state.count1 + 1
            }
        case types.DECREMENT:
            return {
                ...state,
                count1: state.count1 - 1
            };
        case types.INCREMENT2:
            return {
                ...state,
                count2: state.count2 + 1
            }
        default:
            return state;
    }
}
