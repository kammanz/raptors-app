export default (
    state = { team: {} }, action) => {
    switch (action.type) {
        case 'GET_SELECTED_TEAM':
            return {
                ...state,
                team: { ...action.payload },
            }
        default:
            return state;
    };
};
