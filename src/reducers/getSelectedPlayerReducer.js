export default (state = { details: {}, isLoading: false }, action) => {
    switch (action.type) {
        case 'SET_PLAYER_DETAILS_IS_LOADING':
            return {
              ...state,
              isLoading: action.payload,
            };
        case 'PRELOAD_PLAYER':
            return {
              ...state,
              details: { ...action.payload },
            };
        case 'UPDATE_PLAYER':
            return {
              ...state,
              details: {
                ...state.details,
                ...action.payload
              },
            };
        case 'GET_GAMES':
            return {
              ...state,
              details: {
                ...state.details,
                recentGames: action.payload,
              }
            };
        default:
            return state;
    };
};
