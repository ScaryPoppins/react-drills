import React, { Component } from "react";
import "./App.css";
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image truck={'https://i1.wp.com/www.ford-trucks.com/wp-content/uploads/2018/11/f150-lightning-huge-burnout-rear.jpg?ssl=1'}/>
      </div>
    );
  }
}

export default App;
