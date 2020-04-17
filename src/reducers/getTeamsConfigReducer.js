export default (state=[], action) => {
    if(action.type === 'GET_TEAMS_CONFIG') {
        return action.payload;
    }

    return state;
}