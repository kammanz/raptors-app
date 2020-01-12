import apiRequest from '../apis/ballDontLie.js';

export const fetchPlayers = () => {
    return async (dispatch) => {
        const response = await apiRequest.get();

        // console.log(response.data.data, 'data.data');

        console.log(response.data.data.map((item)=> {
            return item.player.team_id;
        }), 'response.data.data mapped');
        
        console.log(response.data.data.filter((item)=> {
            return item.player.team_id === 28;
        }), 'response.data.data.filter');


        dispatch({ type: 'FETCH_PLAYERS', payload: response.data.data})
    }
};
