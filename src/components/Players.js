import React from 'react';
import { connect } from 'react-redux';
import { getPlayers } from '../actions/actions.js';
import { selectPlayer } from '../actions/actions.js';
import { getPlayerHeadshot } from '../actions/actions.js';
import { getPlayerDetails } from '../actions/actions.js';

class Players extends React.Component {
    componentDidMount() {

        this.props.getPlayers();
        // this.props.getPlayerDetails();
        console.log('this.props.getPlayers()', this.props.getPlayers());
        // console.log('this.props.getPlayers()', this.props.getPlayerDetails());
        // this.props.playerHeadshot();
      
    }

    renderPlayers() {
        const { players } = this.props;
        console.log('players', players);
        // return players.map((player, index) => {
        //     return (
        //         <div key={index} onClick={() => this.props.selectPlayer(player)}>
        //             <h4>{player.PLAYER}</h4>
        //             <p>Height: {player.HEIGHT}'</p>
        //             <p>Weight: {player.WEIGHT} Lbs.</p>
        //             <p>Position: {player.POSITION}</p>
        //         </div>
        //     ); 
        // });
    }

    // renderPlayers2() {
    //     const { players } = this.props;

    //     return <div>hello</div>;

    //     // return players.map((player, index) => {
    //     //     return (
    //     //         <div key={index} onClick={() => this.props.selectPlayer(player)}>
    //     //             <h4>{player.PLAYER}</h4>
    //     //             <p>Height: {player.HEIGHT}'</p>
    //     //             <p>Weight: {player.WEIGHT} Lbs.</p>
    //     //             <p>Position: {player.POSITION}</p>
    //     //         </div>
    //     //     ); 
    //     // });
    // }

    render() {
        console.log(this.props.players, 'this.props render in playerslist' );

        return (
            <div>
                <h3>Players</h3>
                <div>{this.renderPlayers()}</div>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.players);
    return { players: state.players };
    
    // return { playerHeadshot: state.playerHeadshot }
}

export default connect(mapStateToProps,
        { 
            getPlayers: getPlayers,
            selectedPlayer: selectPlayer,
            playerHeadshot: getPlayerHeadshot,
            getPlayerDetails: getPlayerDetails,
        }
)(Players);