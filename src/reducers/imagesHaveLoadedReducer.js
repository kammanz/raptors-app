export default (state = null, action) => {
    switch (action.type) {
        case 'SET_IMAGES_HAVE_LOADED':
            return action.payload;
        default:
            return state;
    };
};
