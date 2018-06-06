import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import Dashboard from './dashboard';
import NewTweet from './newTweet';



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
        ? null
        : <NewTweet />
      }
      </div>
    )
  }
}

function mapStatetoProps ({ authedUser }) {
  return {
    loading: authedUser === null
  };
}


export default connect(mapStatetoProps)(App);
