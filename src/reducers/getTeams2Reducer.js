export default (state=[], action) => {
    if(action.type === 'GET_TEAMS2') {
        return action.payload;
    }

    return state;
}