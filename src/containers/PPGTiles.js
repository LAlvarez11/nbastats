import React, { Component } from "react";
import VerticalTile from '../components/vertical_tiles';
import {connect} from 'react-redux';
import {ROOT_URL,config} from'../credentials';
import {fetch_ppg} from '../actions/index'

class PPGTile extends Component {
  componentDidMount() {
    this.props.fetch_ppg();
  }

  render() {
    const { PPG_result } = this.props;

    if (!PPG_result) return "Loading....";

    return (
      <div>
        <h5 className="title is-5">League Leaders In Points Per Game:</h5>
        <VerticalTile PPG_result={this.props.PPG_result}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {PPG_result : state.PPG_result}
}

export default connect(mapStateToProps,{fetch_ppg})(PPGTile);
