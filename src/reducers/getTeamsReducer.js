export default (state=[], action) => {
    if(action.type === 'GET_TEAMS') {
        return action.payload;
    }

    return state;
}