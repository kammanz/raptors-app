export default (
    state = {
        isLoading: true,
        teams: [],
    }, 
    action) => {
    switch (action.type) {
        case 'GET_TEAMS':
            return {
                ...state, 
                teams: action.payload,
            }
        default:
            return state;
    };
};