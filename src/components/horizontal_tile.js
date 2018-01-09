import React, {Component} from "react";
import {ROOT_URL,config} from "../credentials";

class HorizontalTile extends Component {
    state = {}
    render() { 
        return (
            <div className="tile is-parent">
            
                <article className="tile is-child notification is-success">
                <div className="content">
                    <p className="title">ScoreBoards</p>
                    <p className="subtitle">With even more content</p>
                    <div className="content">
                    
                    </div>
                </div>
                </article>
            </div>
        );
    }
}
 
export default HorizontalTile;
