import React from 'react';
import { Component } from 'react';

class Players extends Component {
    constructor(props){
        super(props);
        this.state = {
            players: [],
        }

    }

    componentDidMount() {
        const { players } = this.state;
        fetch('https://www.balldontlie.io/api/v1/players')
            .then(res => res.json())
            .then((data) => {
                console.log(data.data);
                this.setState({
                    // players: data.data
                    players: data.data.map(player => ({
                        ...player,
                    })),
                });
            })
            .catch(console.error);
    }

    render() {

        const { players } = this.state;
        console.log(players);

      
        return (
            <div>
                <h1>List of Raptors</h1>
                <div>{players.map(player => {
                        return <div key={player.id}>{player.first_name}</div>
                    })}
                </div>
            </div>
        )
    }
}

export default Players;