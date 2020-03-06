export default (selectedTeam = null, action) => {
    switch (action.type) {
        case 'SELECTED_TEAM':
            return action.payload;
        default: 
            return selectedTeam;
    }
}