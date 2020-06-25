const initialPlayers = new Array(20).fill({});

export default (state = initialPlayers, action) => {
  switch (action.type) {
    case 'RESET_PLAYERS':
      return initialPlayers;
    case 'SET_PLAYERS':
      return action.payload;
    default:
      return state;
  }
};
