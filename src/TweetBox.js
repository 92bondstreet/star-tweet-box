import React, {Component} from 'react';

class TweetBox extends Component {
  constructor (){
    super();
    this.state = {
      'content': ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Content tweet change handler
   *
   * @param {Event} event
   */
  handleChange (event) {
    this.setState({'content': event.target.value});
  }

  /**
   * Render tweet box
   */
  render () {
    const {content} = this.state;
    const count = 140 - content.length;
    const disabled = ! content || count < 0;

    return (
      <div className="well clearfix">
        <textarea className="form-control" onChange={this.handleChange}></textarea>
        <br/>
        <span>{count}</span>
        <button className="btn btn-primary pull-right" disabled={disabled}>Tweet</button>
      </div>
    );
  }
}

export default TweetBox;
