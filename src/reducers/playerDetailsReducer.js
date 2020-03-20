export default (state = null, action) => {
    switch (action.type) {
        case 'PRELOAD_PLAYER':
            return action.payload;
        case 'UPDATE_PLAYER':
          console.log(action.payload);
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
