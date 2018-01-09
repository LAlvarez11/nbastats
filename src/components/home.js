import React,{Component} from 'react';
import Header from './header'
import PPGTile from '../containers/PPGTiles'

class Home extends Component {

    render() { 
        return <div>
            <Header />
            <PPGTile />
            
          </div>;
    }
}
 
export default Home;
