import React, {Component} from 'react';
import axios from 'axios';

const ROOT_URL ='https://api.mysportsfeeds.com/v1.1/pull/nba/2017-2018-regular/'
const PPG_SORT_PARAM = 'stats.pts%2Fg.d'
const PLAYER_STATS_PARAM = "PTS%2FG,REB%2FG,AST%2FG";
const PPG_STATS_URL = `${ROOT_URL}cumulative_player_stats.json?playerstats=${PLAYER_STATS_PARAM}&sort=${PPG_SORT_PARAM}&limit=10`;
const ACTIVE_PLAYERS_URL =`${ROOT_URL}active_players.json`;

const USERNAME = 'lalvarez2'
const PASSWORD = 'Meant123';

const config = {
  headers: {'Authorization': "Basic " + btoa( USERNAME + ":" + PASSWORD )}
};

class Body extends Component {
    
      constructor(props) {
    super(props);
    
    this.state = {
        PPG_result: null,
    }

    this.fetchPointsData=this.fetchPointsData.bind(this);
}

    componentDidMount(){
        this.fetchPointsData();
    }

   fetchPointsData(){
        const request = axios.get(PPG_STATS_URL,config)
        .then (response => {
            //console.log(response.data.cumulativeplayerstats.playerstatsentry);
            this.setState({PPG_result: response.data.cumulativeplayerstats.playerstatsentry});
            console.log(this.state.PPG_result); 
        });
        console.log(this.state.PPG_result);
    }

    renderTable(playerData){
        const {player,stats,team} = playerData;
        const ID = player.ID;
        const name = player.FirstName + " " + playerData.player.LastName;
        const teams = team.City + " " + team.Name;
        const position = player.Position;
        const ppg = stats.PtsPerGame["#text"];
        return(
        <tr key={ID}>
        <td>{name}</td>
        <td>{teams}</td>
        <td> {position} </td>
        <td> {ppg} </td>
        </tr>
        );
    }

    render() { 
        const {PPG_result} = this.state;
       { if(!PPG_result){
            return "Loading...."
        }}
        return(<table className=" table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Team</th>
                <th>Position</th>
                <th>Points Per Game</th>
              </tr>
            </thead>
            <tbody>{this.state.PPG_result.map(this.renderTable)}</tbody>
          </table>);
    }
}
 
export default Body;