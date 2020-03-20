export default (state = [], action) => {
    switch (action.type) {
        case 'GET_PLAYERS':
            return action.payload;
        default:
            return state;
    }
};
