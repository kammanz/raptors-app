export default (state={}, action) => {
    if(action.type === 'GET_SELECTED_TEAM') {
        return action.payload;
    }

    return state;
}