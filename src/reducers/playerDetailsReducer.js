export default (
  state = {
    details: {
      recentGames: [],
    },
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case 'SET_PLAYER_DETAILS_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'PRELOAD_PLAYER_DETAILS':
      return {
        ...state,
        details: {
          recentGames: [],
          ...action.payload,
        },
      };
    case 'UPDATE_PLAYER_DETAILS':
      return {
        ...state,
        details: {
          ...state.details,
          ...action.payload,
        },
      };
    case 'SET_RECENT_GAMES':
      return {
        ...state,
        details: {
          ...state.details,
          recentGames: action.payload,
        },
      };
    default:
      return state;
  }
};
