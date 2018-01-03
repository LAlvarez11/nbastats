import React, { Component } from "react";
import axios from 'axios';
import {USERNAME,PASSWORD,ROOT_URL} from '../credentials';

const config = {
  headers: { Authorization: "Basic " + btoa(USERNAME + ":" + PASSWORD) }
};

class VerticalTile extends Component {

  constructor(props){
    super(props);
    this.state = { image: "https://cdn2.lobster.media/assets/default_avatar-afa14913913cc117c73f1ac69496d74e.png" };
    this.fetchPlayerImage= this.fetchPlayerImage.bind(this);
    this.renderTiles = this.renderTiles.bind(this);
  }

  fetchPlayerImage(id){
    const ACTIVE_PLAYERS_URL = `${ROOT_URL}active_players.json?player=${id}`;
    axios.get(ACTIVE_PLAYERS_URL,config).then(response => {
      const playerData = response.data.activeplayers.playerentry;
      console.log(playerData[0].player);
      const image = playerData[0].player.officialImageSrc;
      this.setState({
        image: image
      })
      });
  }

  renderTiles(playerData) {

    const { player, stats, team } = playerData;
    const ID = player.ID;
    const name = player.FirstName + " " + playerData.player.LastName;
    const playerNumber = player.JerseyNumber;
    const playerTeam = team.City + " " + team.Name;
    const position = player.Position;
    const ppg = stats.PtsPerGame["#text"];

    const imgSrc = this.fetchPlayerImage(ID); 

    return (
      <div key={ID} className="tile  is-child  ">
        <div className="tile is-child notification">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.state.image} alt={name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{name}</strong> <small>{playerTeam}</small>{" "}
                  <small>{position}</small> <small> {playerNumber} </small>
                  <br />
                  Points Per Game: <strong>{ppg}</strong>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              {this.props.PPG_result.map(this.renderTiles)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VerticalTile;
