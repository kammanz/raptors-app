export default (
    state = {
        isLoading: true,
        team: {},
    }, 
    action) => {

    switch (action.type) {
        case 'SET_PLAYER_LIST_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            }
        case 'GET_SELECTED_TEAM':
            return {
                ...state,
                team: { ...action.payload },
            }
        default:
            return state;
    };
};
