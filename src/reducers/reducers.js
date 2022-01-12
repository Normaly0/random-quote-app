let defaultState = {
    quote: '',
    name: ''
}

const CHANGE_QUOTE = "CHANGE_QUOTE";

const mainReducer = (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_QUOTE:
            return {
                ...state, quote: action.quote, name: action.name
            };
        default:
            return {
                ...state
            };
    };
};

export default mainReducer;