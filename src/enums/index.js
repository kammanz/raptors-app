import React from 'react';

import ATL from 'assets/logos/ATL';
import BKN from 'assets/logos/BKN';
import BOS from 'assets/logos/BOS';
import CHA from 'assets/logos/CHA';
import CHI from 'assets/logos/CHI';
import CLE from 'assets/logos/CLE';
import DAL from 'assets/logos/DAL';
import DEN from 'assets/logos/DEN';
import DET from 'assets/logos/DET';
import GSW from 'assets/logos/GSW';
import HOU from 'assets/logos/HOU';
import IND from 'assets/logos/IND';
import LAC from 'assets/logos/LAC';
import LAL from 'assets/logos/LAL';
import MEM from 'assets/logos/MEM';
import MIA from 'assets/logos/MIA';
import MIL from 'assets/logos/MIL';
import MIN from 'assets/logos/MIN';
import NOP from 'assets/logos/NOP';
import NYK from 'assets/logos/NYK';
import OKC from 'assets/logos/OKC';
import ORL from 'assets/logos/ORL';
import PHI from 'assets/logos/PHI';
import PHX from 'assets/logos/PHX';
import POR from 'assets/logos/POR';
import SAC from 'assets/logos/SAC';
import SAS from 'assets/logos/SAS';
import TOR from 'assets/logos/TOR';
import UTA from 'assets/logos/UTA';
import WAS from 'assets/logos/WAS';

/**
 * Enum for common colors.
 * @readonly
 * @enum {string}
 */
export const COLORS = Object.freeze({
  LIGHT_GREY: '#f5f5f5',
  GREY: '#a8a8a8',
});

/**
 * Enum for teams object.
 * @readonly
 * @enum {{ TRI_CODE: string, NAME: string, ID: string, LOGO: jsx, }}
 */
export const TEAMS = Object.freeze({
  ATL: {
    TRI_CODE: 'ATL',
    NAME: 'hawks',
    ID: '1610612737',
    LOGO: <ATL />,
  },
  BKN: {
    TRI_CODE: 'BKN',
    NAME: 'nets',
    ID: '1610612751',
    LOGO: <BKN />,
  },
  BOS: {
    TRI_CODE: 'BOS',
    NAME: 'celtics',
    ID: '1610612738',
    LOGO: <BOS />,
  },
  CHA: {
    TRI_CODE: 'CHA',
    NAME: 'hornets',
    ID: '1610612766',
    LOGO: <CHA />,
  },
  CHI: {
    TRI_CODE: 'CHI',
    NAME: 'bulls',
    ID: '1610612741',
    LOGO: <CHI />,
  },
  CLE: {
    TRI_CODE: 'CLE',
    NAME: 'cavaliers',
    ID: '1610612739',
    LOGO: <CLE />,
  },
  DAL: {
    TRI_CODE: 'DAL',
    NAME: 'mavericks',
    ID: '1610612742',
    LOGO: <DAL />,
  },
  DEN: {
    TRI_CODE: 'DEN',
    NAME: 'nuggets',
    ID: '1610612743',
    LOGO: <DEN />,
  },
  DET: {
    TRI_CODE: 'DET',
    NAME: 'pistons',
    ID: '1610612765',
    LOGO: <DET />,
  },
  GSW: {
    TRI_CODE: 'GSW',
    NAME: 'warriors',
    ID: '1610612744',
    LOGO: <GSW />,
  },
  HOU: {
    TRI_CODE: 'HOU',
    NAME: 'rockets',
    ID: '1610612745',
    LOGO: <HOU />,
  },
  IND: {
    TRI_CODE: 'IND',
    NAME: 'pacers',
    ID: '1610612754',
    LOGO: <IND />,
  },
  LAC: {
    TRI_CODE: 'LAC',
    NAME: 'clippers',
    ID: '1610612746',
    LOGO: <LAC />,
  },
  LAL: {
    TRI_CODE: 'LAL',
    NAME: 'lakers',
    ID: '1610612747',
    LOGO: <LAL />,
  },
  MEM: {
    TRI_CODE: 'MEM',
    NAME: 'grizzlies',
    ID: '1610612763',
    LOGO: <MEM />,
  },
  MIA: {
    TRI_CODE: 'MIA',
    NAME: 'heat',
    ID: '1610612748',
    LOGO: <MIA />,
  },
  MIL: {
    TRI_CODE: 'MIL',
    NAME: 'bucks',
    ID: '1610612749',
    LOGO: <MIL />,
  },
  MIN: {
    TRI_CODE: 'MIN',
    NAME: 'timberwolves',
    ID: '1610612750',
    LOGO: <MIN />,
  },
  NOP: {
    TRI_CODE: 'NOP',
    NAME: 'pelicans',
    ID: '1610612740',
    LOGO: <NOP />,
  },
  NYK: {
    TRI_CODE: 'NYK',
    NAME: 'knicks',
    ID: '1610612752',
    LOGO: <NYK />,
  },
  OKC: {
    TRI_CODE: 'OKC',
    NAME: 'thunder',
    ID: '1610612760',
    LOGO: <OKC />,
  },
  ORL: {
    TRI_CODE: 'ORL',
    NAME: 'magic',
    ID: '1610612753',
    LOGO: <ORL />,
  },
  PHI: {
    TRI_CODE: 'PHI',
    NAME: 'sixers',
    ID: '1610612755',
    LOGO: <PHI />,
  },
  PHX: {
    TRI_CODE: 'PHX',
    NAME: 'suns',
    ID: '1610612756',
    LOGO: <PHX />,
  },
  POR: {
    TRI_CODE: 'POR',
    NAME: 'trailblazers',
    ID: '1610612757',
    LOGO: <POR />,
  },
  SAC: {
    TRI_CODE: 'SAC',
    NAME: 'kings',
    ID: '1610612758',
    LOGO: <SAC />,
  },
  SAS: {
    TRI_CODE: 'SAS',
    NAME: 'spurs',
    ID: '1610612759',
    LOGO: <SAS />,
  },
  TOR: {
    TRI_CODE: 'TOR',
    NAME: 'raptors',
    ID: '1610612761',
    LOGO: <TOR />,
  },
  UTA: {
    TRI_CODE: 'UTA',
    NAME: 'jazz',
    ID: '1610612762',
    LOGO: <UTA />,
  },
  WAS: {
    TRI_CODE: 'WAS',
    NAME: 'wizards',
    ID: '1610612764',
    LOGO: <WAS />,
  },
});
