export default (state = [], action) => {
    switch (action.type) {
        case 'TODAYS_GAME':
            return action.payload;
        default:
            return state;
    }
};
