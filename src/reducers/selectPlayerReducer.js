export default (selectPlayer="Choose Raptors", action) => {
    switch (action.type) {
        case 'SELECT_PLAYER':
            return action.payload;
        default: 
            return selectPlayer;
    }
}