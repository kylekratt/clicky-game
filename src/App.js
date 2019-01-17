import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedFriends: [],
    score: 0,
    topScore: 0
  };
  
  check = id => {
    if (this.state.clickedFriends.includes(id)){
      this.setState({score: 0});
      this.setState({clickedFriends: []});
      this.setState({message: "You were incorrect..."})
    }
    else{
      this.setState({score: this.state.score+1});
      this.setState({message: "You were correct!"})
      if (this.state.score + 1 > this.state.topScore){
        this.setState({topScore: this.state.score + 1})
      }
      this.setState({clickedFriends: [...this.state.clickedFriends, id]})
      console.log(this.state.clickedFriends);
    }
    this.shuffle();
  }
  shuffle = () => {
    for (let i = friends.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]];
    }
    console.log(friends);
    this.setState({friends: friends});
  }

  render() {
    return (
      <div>
        <Title 
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <div className ="container">
        <div className ="d-flex flex-wrap p-2 bd-highlight row">
        {this.state.friends.map(friend => (
          <FriendCard
            check = {this.check}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
        </div>
        </div>
      </div>
    );
  }
}

export default App;
