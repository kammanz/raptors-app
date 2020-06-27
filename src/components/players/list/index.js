import React, { useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Overlay from 'components/_shared/overlay';
import Spinner from 'components/_shared/spinner';
import placeholderImg from 'assets/imgs/placeholder.png';
import { getSelectedPlayer } from 'actions';
import { formatPlayerPhotoUrl } from 'utils/stringUtils';

import Card from './card';

import styles from './index.module.scss';

const List = ({
  getSelectedPlayer,
  players,
  player: {
    details: { person_id: selectedPlayerId },
  },
  selectedTeam: { teamId, teamColor, urlName },
  history,
  isLoading,
}) => {
  const domRef = useRef();

  useEffect(() => {
    domRef.current.scrollTo(0, 0);
  }, [teamId]);

  const renderPlayers = () =>
    players.map((player, index) => {
      const {
        person_id,
        first_name,
        last_name,
        jersey_number,
        position_full,
        height_ft,
        height_in,
        weight_lbs,
      } = player;
      const isSelected = person_id && selectedPlayerId === person_id;

      return (
        <Card
          key={index}
          personId={person_id}
          firstName={first_name}
          lastName={last_name}
          jerseyNumber={jersey_number}
          position={position_full}
          heightInFeet={height_ft}
          heightInInches={height_in}
          weight={weight_lbs}
          urlName={urlName}
          teamId={teamId}
          teamColor={teamColor}
          isSelected={isSelected}
          getSelectedPlayer={getSelectedPlayer}
          player={player}
          history={history}
          formatPlayerPhotoUrl={formatPlayerPhotoUrl}
          placeholderImg={placeholderImg}
        />
      );
    });

  return (
    <div ref={domRef} className={classnames(styles.container, isLoading && styles.noScroll)}>
      <Overlay isLoading={isLoading}>
        <Spinner height={19} width={4} radius={3} isLoading={isLoading} />
      </Overlay>
      {renderPlayers()}
    </div>
  );
};

const mapStateToProps = ({ player, players: { list, isLoading }, teams: { selectedTeam } }) => {
  return { player, players: list, isLoading, selectedTeam };
};

List.propTypes = {
  getSelectedPlayer: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
  player: PropTypes.object.isRequired,
  selectedTeam: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { getSelectedPlayer })(withRouter(List));
