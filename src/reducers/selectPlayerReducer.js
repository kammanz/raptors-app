export default (state = null, action) => {
    switch (action.type) {
        case 'PRELOAD_PLAYER':
            return action.payload;
        case 'SELECT_PLAYER':
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
