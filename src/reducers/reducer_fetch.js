import {FETCH_PPG} from '../actions/index'
import _ from 'lodash';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PPG:
      return [...state, ...action.payload.data.cumulativeplayerstats.playerstatsentry];
    default:
      return state;
  }
 
}
