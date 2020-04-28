export default (state = null, action) => {
    switch (action.type) {
        case 'PRELOAD_PLAYER':
            return action.payload;
        case 'UPDATE_PLAYER':
            return { ...state, ...action.payload };
        case 'GET_GAMES':
            return { ...state, recentGames: { ...action.payload } };
        default:
            return state;
    }
}
