import React from 'react';
import './Card.css';

class Card extends React.Component {
   state={
       style: {
        backgroundImage: "",
        backgroundSize: "100% 100%"
      }
   }
handleClick(){
    this.setState({style: {backgroundImage: "url("+this.props.image+")"}})
    setTimeout( () => {
        this.setState({style: {backgroundImage: ""}})
    }, 2000)
    this.props.handleClick()
}
    render(){

        return (
            <div onClick={() => this.handleClick(this.props.handleClick)}
                 className={'card'}
                 style={this.state.style}
                 >

            </div>
        )
    }
}

export default Card