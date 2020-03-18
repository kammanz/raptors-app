export default (selectGame=null, action) => {
    switch (action.type) {
        case 'SELECT_GAME':
            return action.payload;
        default:
            return selectGame; 
    }
}