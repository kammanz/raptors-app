export default (
  state = {
    urlName: 'raptors',
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
