import apiRequest from '../apis/ballDontLie.js';

export const fetchPlayers = () => {
    return async (dispatch) => {
        const response = await apiRequest.get('?search=Lowry');

       dispatch({ type: 'FETCH_PLAYERS', payload: response.data.data})
    }
};
