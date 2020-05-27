export default (
    state = {
        isLoading: true,
        teams: [],
    }, 
    action) => {
    switch (action.type) {
        
        case 'SET_PLAYER_LIST_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            }
        case 'GET_TEAMS':
            return {
                ...state, 
                teams: action.payload,
            }
        default:
            return state;
    };
};