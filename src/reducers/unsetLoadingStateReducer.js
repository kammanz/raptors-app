export default (state = null, action) => {
    // console.log(action.payload, 'action.payload');
    // console.log(state, 'state');
    switch (action.type) {
        case 'UNSET_LOADING_STATE':
            // console.log('right here');
            return action.payload;
        default:
            return state; 
    };
};