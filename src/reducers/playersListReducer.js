export default (state = [], action) => {
    switch (action.type) {
        case 'GET_PLAYERS_LIST':
            return action.payload;
        default:
            return state;
    }
};



