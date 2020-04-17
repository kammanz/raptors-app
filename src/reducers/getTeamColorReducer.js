export default (state='', action) => {
    if (action.type === 'GET_TEAM_COLOR') {
        return action.payload;
    }

    return state;
};