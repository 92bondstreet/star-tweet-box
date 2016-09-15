import React, {Component} from 'react';

class TweetBox extends Component {
  render () {
    return (
      <div className="well clearfix">
        <textarea className="form-control"></textarea>
        <br/>
        <button className="btn btn-primary pull-right" disabled>Tweet</button>
      </div>
    );
  }
}

export default TweetBox;
