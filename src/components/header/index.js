import React from 'react';
import { connect } from 'react-redux';

import { getTeams, getSelectedTeam } from '../../actions/actions.js';
import { TEAMS, COLORS } from '../../enums';

import NavMenu from './navMenu';

import bell from '../../assets/icons/notification-bell.svg';
import settingsIcon from '../../assets/icons/settings-icon.svg';
import kobe from '../../assets/imgs/kobe.png';

import styles from './index.module.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTeamTricode: TEAMS.TOR.TRI_CODE,
            selectedTeamId: TEAMS.TOR.ID,
        };
    };

    componentDidMount() {
        this.props.getTeams();
    };

    onSelectChange = e => {
        const { teams, getSelectedTeam } = this.props;
        const selectedTeam = teams.find(team => team.teamId === e.target.value);

        this.setState({
            selectedTeamTricode: selectedTeam.tricode,
            selectedTeamId: e.target.value,
        });

        getSelectedTeam(selectedTeam);
    };

    render() {
        const { selectedTeamTricode, selectedTeamId } = this.state;
        const { teams, selectedTeamColor } = this.props;
        console.log('selected team', this.props.selectedTeam);

        return (
            <div className={styles.container}>
                <div className={styles.team} style={{backgroundColor: `${selectedTeamColor}`}}>
                    <div className={styles.logoContainer}>
                        <div className={styles.imgContainer}>
                           <img
                                src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${selectedTeamTricode}.svg`}
                                title='team logo'
                                alt='team logo'
                            />
                        </div>
                        <div className={styles.selectContainer}>
                            <select
                                value={selectedTeamId}
                                onChange={this.onSelectChange}
                                style={{ backgroundColor: `${selectedTeamColor}`}}
                            >
                                {teams.map((team) => {
                                    return <option key={team.teamId} value={team.teamId}>{team.ttsName}</option>;
                                })}
                            </select>
                        </div>
                    </div>
                    <div
                        style={{ borderColor: `${selectedTeamColor || COLORS.LIGHT_GREY} transparent transparent transparent` }}
                        className={styles.borderTriangle}
                    />
                </div>

                <NavMenu selectedTeamColor={selectedTeamColor} />

                <div className={styles.user}>
                    <button>
                        <img src={bell} alt='notification bell'></img>
                    </button>
                    <button>
                        <img src={settingsIcon} alt='settings icon'></img>
                    </button>
                    <button>
                        <img src={kobe} alt='user avatar' height='25' className={styles.userPic}></img>
                        <div>Kobe Bryant</div>
                        <i className={styles.dropDownUser}></i>
                    </button>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        teams: state.teams,
        selectedTeam: state.selectedTeam,
        selectedTeamColor: state.selectedTeamColor,
    };
};

export default connect(mapStateToProps, { getTeams, getSelectedTeam })(Header);
