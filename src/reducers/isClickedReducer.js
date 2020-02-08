export default (state = null, action) => {
    switch (action.type) {
        case 'IS_CLICKED':
            return !action.payload;
        default:
            return state;
    }
};