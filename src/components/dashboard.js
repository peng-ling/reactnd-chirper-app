import React, { Component } from 'react';
import { connect }  from 'react-redux';

class Dashboard extends Component {
  render (){
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
      </div>
    );
  }
}

function mapStateToProbs({ tweets }) {
  return {
    tweetIds: Object.keys(tweets)
      .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp),
  };
}

export default connect(mapStateToProbs)(Dashboard);
