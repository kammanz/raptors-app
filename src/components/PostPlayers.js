import React from 'react';
import { connect } from 'react-redux';
import playersReducer from '../reducers/playersReducer.js'
// 1. 
import { fetchPlayers } from '../actions/actions.js';

// 1. we need to wire our action creator to this component
// 2. we use the connect function to wire our action (fetchPlayers) to the current component (PostPlayers)
// 2.a we use an action creator as our second argument
// 3. we make a compdidmount: only after the comp has mounted do we make the api call to fetch the player list 

class PostPlayers extends React.Component {
    componentDidMount() {
        this.props.fetchPlayers();
    }

    render() {
        console.log(this.props.players);
        const {players} = this.props;
        console.log(players);
        // const kyle = players[0];
        const name = players.map(item=> item.first_name)
        return (<div>
            <h3>Post Players</h3>
            <div>{name}</div>
        </div>)
    }
}

// this returns a cloned state object
const mapStateToProps = (state) => {
    // look inside the combinedReducers object, and choose the property name you want to update. 
    // then return an object with a property name, and its current value in the state   
    return {players: state.players};
    // you now the old state value. 
}

export default connect(
    mapStateToProps, 
    // 2.a
    {fetchPlayers: fetchPlayers/* this function returns an object*/}
)(PostPlayers);