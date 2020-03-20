export default (state = [], action) => {
    switch (action.type) {
        case 'GET_GAMESTATS':
            return action.payload;
        default:
            return state; 
    }
}