export default (state = "", action) => {
  switch (action.type) {
    case "GET_TEAM_COLOR":
      return action.payload;
    default:
      return state;
  }
};
