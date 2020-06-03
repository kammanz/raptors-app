export default (state = [], action) => {
  switch (action.type) {
    case 'GET_TEAMS':
      return action.payload;
    default:
      return state;
  };
};