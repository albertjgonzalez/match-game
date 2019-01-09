import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{
    
    render(props){

        return (
            <div id='NavBar-Content'>
                <a href="https://fontmeme.com/super-smash-bros-font/"><img src="https://fontmeme.com/permalink/190109/d3d91568e8857d10b5dc4f614dc25ece.png" alt="super-smash-bros-font" border="0" /></a>
                <h3>{this.props.header}</h3>
                <h4>Score:{this.props.score}  Losses:{this.props.losses}</h4>
            </div>
        )
    }
}

export default NavBar;