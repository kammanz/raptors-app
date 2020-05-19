import React from 'react';
import { connect } from 'react-redux';
// import { setLoadingState } from '../../actions/actions';

import styles from './overlay.module.scss';
// import setLoadingStateReducer from '../../reducers/setLoadingStateReducer';

class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playersHaveLoaded: null,
        }
    }

    // componentDidMount() {
    //     const {players} = this.props;
    //     this.setState({
    //         playersHaveLoaded: false,
    //     });
    // };

    // componentDidUpdate() {
    //     console.log(this.props.players, 'this.props.players');
    //     if(this.props.players) {
    //         this.setState({
    //             playersHaveLoaded: true,
    //         }); 
    //     }
    // }

    
    // console.log(selectedTeam);
    // const players2 = players === false;
    // // console.log(players2, 'here');
    // console.log(players, 'should say false');
    // if (!players2) {
    //     // console.log('empty array');
    //     return <div className={styles.overlay} />;
    // }
    render() {
        console.log(this.props);
        // if(this.props.players) {
        //     this.setState({
        //         playersHaveLoaded: true,
        //     }); 
        // }
        return (this.props.loadingState ? <div className={styles.overlayWhite} /> : <div/>);
    }

    // if (loadingState === false) {
    //     alert("false");
    //     return <div />;
    // }
  
    // return <div/>;

    // if (loadingState === "false") {
    //     return <div />;
    // }
    // alert("false");
    // return <div/>;
    // return (loadingState === "true" ? <div className={styles.overlay} : <div></div>/>);
    // return <div />;
    

    // if (!players2) {
    //     return <div />;
    // }
    // console.log(players == [], 'i want to see true');
    // return (!players && <div className={styles.overlay} />);

};

const mapStateToProps = state => {
    return { loadingState: state.loadingState, players: state.players };
};

export default connect(mapStateToProps)(Overlay);