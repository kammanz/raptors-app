export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PLAYERS':
            return action.payload;
        default:
            return state;
    }
};

export default (state=[], action) => {
    switch (action.type) {
        case 'FETCH_STATS':
            return action.payload;
        default: 
            return state;
    }
}