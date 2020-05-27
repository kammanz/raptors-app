export default (state = false, action) => {
    switch (action.type) {
        case 'DATA_HAS_LOADED':
            return action.payload;
        default:
            return state;
    };
};
