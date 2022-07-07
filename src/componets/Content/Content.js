import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../pages/Home';

export default class Content extends React.Component {
  render() {
    return (
      <Route exact path="/" component={ Home } />
    );
  }
}
