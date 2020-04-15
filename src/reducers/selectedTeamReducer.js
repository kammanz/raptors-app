export default (state=null, action) => {
    if(action.type === 'SELECTED_TEAM') {
        return action.payload;
    }

    return state;
}