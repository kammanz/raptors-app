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
        };
    };

    render() {
        return (this.props.loadingState ? <div className={styles.overlayWhite} /> : <div/>);
    };
};

const mapStateToProps = state => {
    return { loadingState: state.loadingState, players: state.players };
};

export default connect(mapStateToProps)(Overlay);