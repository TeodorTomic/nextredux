const reducer = (state = {tick: 'init', tack: 'init'}, action) => {
    switch (action.type) {
        case 'TICKK':
        case 'TICK':
            return {...state, tick: action.payload};
        case 'TACK':
            return {...state, tack: action.payload};
        default:
            return state
    }
};

export default reducer;