import React, { Component } from 'react';
import { Header } from './components';
import { User } from '../utils';

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