import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{
    
    render(props){

        return (
            <div id='NavBar-Content'>
                <h1>Clicky Game</h1>
                <h3>{this.props.header}</h3>
                <h4>Score:{this.props.score}  Losses:{this.props.losses}</h4>
            </div>
        )
    }
}

export default NavBar;