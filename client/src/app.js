import React, { Component } from 'react';
import { Header } from './components';
import { User } from './utils';

export default class App extends Component {
  constructor(x) {
    super(x);
    this.choosing = false;
    this.state = {
      user: new User('Po'),
      wo: []
    }
  }
  componentDidMount() {
    console.log(this.state.user);
  }
  init() {
    let { wo } = this.state;
    let hold = this.state.user.requestWorkout();
    hold.confirm();
    console.log(hold);
    if (wo.length > 4) (this.state.wo.shift());
    this.setState({
      wo: this.state.wo.concat([hold.workout.bodyPart])
    });
  }
  boo() {
    console.log('gekki')
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}