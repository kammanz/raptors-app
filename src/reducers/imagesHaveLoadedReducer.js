export default (state = null, action) => {
    // console.log('this fired');
    switch (action.type) {
        case 'SET_IMAGES_HAVE_LOADED':
            return action.payload;
        default:
            return state;
    };
};
