import React from 'react';
import './Card.css';

class Card extends React.Component {
   state={
       style: {
        backgroundImage: "url("+'https://freestencilgallery.com/wp-content/uploads/2018/03/Super-Smash-Bros-Logo-Stencil-thumb-150x150.jpg'+")",
        backgroundSize: "100% 100%"
      }
   }
handleClick(){
    this.setState({style: {backgroundImage: "url("+this.props.image+")"}})
    setTimeout( () => {
        this.setState({style: {backgroundImage: "url("+'https://freestencilgallery.com/wp-content/uploads/2018/03/Super-Smash-Bros-Logo-Stencil-thumb-150x150.jpg'+")",}})
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