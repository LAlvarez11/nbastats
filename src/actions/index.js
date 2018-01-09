import axios from "axios";
import {ROOT_URL,config} from '../credentials';

export const FETCH_PPG = 'fetch_ppg';

const PPG_SORT_PARAM = "stats.pts%2Fg.d";
const PLAYER_STATS_PARAM = "PTS%2FG,REB%2FG,AST%2FG";
const PPG_STATS_URL = `${ROOT_URL}cumulative_player_stats.json?playerstats=${PLAYER_STATS_PARAM}&sort=${PPG_SORT_PARAM}&limit=5`;

const ACTIVE_PLAYERS_URL = `${ROOT_URL}active_players.json`;

export function fetch_ppg(){
    const request = axios.get(PPG_STATS_URL, config);
    console.log(request);
    
    return{
        type: FETCH_PPG,
        payload: request
    };
}


