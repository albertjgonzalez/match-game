import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Card from './components/Card/Card.jsx';
import Characters from './Characters.json';

class App extends Component {
  state = {
    header:'Click a card to flip it, find its match.',
    Characters: Characters,
    score: 0,
    losses:0,
    cardOneName: '',
    cardOneId: '',
    cardTwoName: '',
    cardTwoId: ''
  }

  handleClick(name, id) {
    
    if (!this.state.cardOneName) {
      this.setState({
        header:'Card Selected. Find its match!',
        cardOneName: name,
        cardOneId: id
      })
    }
    
      else if (this.state.cardOneId == id) {
      this.setState({header:'You already picked this card, pick another.'})
      setTimeout(()=>this.setState({header:'Card Selected. Find its match!'}),2000)
    }

    else if (this.state.cardOneName !== name) {
      this.setState({
        header:'Wrong!',
        losses:this.state.losses+1,
        cardOneName: '',
        cardOneId: '',
        cardTwoName: '',
        cardTwoId: ''
      })
      setTimeout(()=>this.setState({header:'Click a card to flip it, find its match.'}),2000)
      if(this.state.losses == 2){
        this.setState({
           header:'You Lose!' ,
           losses:0,
           score:0,
           Characters:Characters
      })
        setTimeout(()=>this.setState({header:'Click a card to flip it, find its match.'}),2000)
      }
    } else if((this.state.cardOneName == name) && (this.state.cardOneId !== id)) {
      this.setState({
        Characters: this.state.Characters.filter(Character => Character.id !== id && Character.id !== this.state.cardOneId),
        score: this.state.score + 1,
        header:'Nice!',
        cardOneName: '',
        cardOneId: '',
        cardTwoName: '',
        cardTwoId: ''
      })
      setTimeout(()=>this.setState({header:'Click a card to flip it, find its match.'}),2000)
      if(this.state.score == 5){
        this.setState({
          header:'You Win!'
        })
        setTimeout(()=>this.setState({
          Characters:Characters,
          losses:0,
           score:0,
          header:'Click a card to flip it, find its match.'
        }),3000)
      }
    }
  }

  render() {
    return (
      <div className="App">

        <NavBar 
        score={this.state.score} 
        losses={this.state.losses}
        header={this.state.header}
        />

        <div id='cardHolder'>
        {this.state.Characters.map(Character => {
          return (
            <Card
              id={Character.id}
              name={Character.name}
              image={Character.image}
              handleClick={() => this.handleClick(Character.name, Character.id)}
            />
          )
        })}
          </div>
      </div>
    );
  }
}

export default App;
