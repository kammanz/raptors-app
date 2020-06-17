export default (
  state = {
    urlName: 'raptors', // TODO: set team based on user's geographical location
  },
  action
) => {
  switch (action.type) {
    case 'GET_SELECTED_TEAM':
      return action.payload;
    default:
      return state;
  }
};
