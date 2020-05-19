export default (state = null, action) => {
    // console.log(action.payload, 'action.payload');
    // console.log(state, 'state');
    switch (action.type) {
        case 'SET_LOADING':
            return action.payload;
        default:
            return state; 
    };
};