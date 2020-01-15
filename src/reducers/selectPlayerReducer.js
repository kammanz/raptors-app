export default (selectPlayer=null, action) => {
    switch (action.type) {
        case 'SELECT_PLAYER':
            return action.payload;
        default: 
            return selectPlayer;
    }
}