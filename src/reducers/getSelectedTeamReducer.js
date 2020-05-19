export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_SELECTED_TEAM':
            return action.payload;
        default:
            return state;
    };
};
