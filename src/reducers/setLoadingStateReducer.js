export default (state = null, action) => {
    switch (action.type) {
        case 'SET_LOADING_STATE':
            return action.payload;
        // case 'UNSET_LOADING_STATE':
        //     // console.log('right here');
        //     return action.payload;
        default:
            return state; 
    };
};