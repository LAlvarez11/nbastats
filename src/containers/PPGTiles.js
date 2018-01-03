import React, { Component } from "react";
import VerticalTile from '../components/vertical_tiles';
import axios from "axios";
import {USERNAME, PASSWORD, ROOT_URL} from'../credentials';


const PPG_SORT_PARAM = 'stats.pts%2Fg.d'
const PLAYER_STATS_PARAM = "PTS%2FG,REB%2FG,AST%2FG";
const PPG_STATS_URL = `${ROOT_URL}cumulative_player_stats.json?playerstats=${PLAYER_STATS_PARAM}&sort=${PPG_SORT_PARAM}&limit=10`;


const config = {
  headers: {'Authorization': "Basic " + btoa( USERNAME + ":" + PASSWORD )}
};

class PPGTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PPG_result: null,
    };

    this.fetch_PPG = this.fetch_PPG.bind(this);
  }

  fetch_PPG() {
    axios.get(PPG_STATS_URL, config).then(response => {
      this.setState({
        PPG_result: response.data.cumulativeplayerstats.playerstatsentry
      });
    });
  }

  componentDidMount() {
    this.fetch_PPG();
  }

  render() {
    const { PPG_result } = this.state;

    if (!PPG_result) return "Loading....";

    return (
      <div>
        <h5 className="title is-5">League Leaders In Points Per Game:</h5>
        <VerticalTile PPG_result={PPG_result}/>
      </div>
    );
  }
}

export default PPGTile;
