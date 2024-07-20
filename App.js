import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate developer.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Engineer'
      },
      show: false,
      mountedTime: 0
    };
    this.intervalId = null;
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { person, show, mountedTime } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div>
            <img src={person.imgSrc} alt="Profile" />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <h2>{person.profession}</h2>
          </div>
        )}
        <p>Time since component mounted: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
