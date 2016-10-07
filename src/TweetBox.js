import React, {Component} from 'react';

class TweetBox extends Component {
  constructor (){
    super();
    this.state = {
      'content': '',
      'photo': false
    };
    this.handleContent = this.handleContent.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
  }

  /**
   * Content tweet change handler
   *
   * @param {Event} event
   */
  handleContent (event) {
    this.setState({'content': event.target.value});
  }

  handlePhoto () {
    this.setState({'photo': ! this.state.photo});
  }

  /**
   * Render tweet box
   */
  render () {
    const {content, photo} = this.state;
    const count = 140 - content.length - (23 * photo | 0);
    const disabled = count === 140 || count < 0;
    const add = this.state.photo ? '✓ Photo Added' : 'Add Photo';

    return (
      <div className="well clearfix">
        <textarea className="form-control" onChange={this.handleContent}></textarea>
        <br/>
        <span>{count}</span>
        <button className="btn btn-primary pull-right" disabled={disabled}>Tweet</button>
        <button className="btn btn-default pull-right" onClick={this.handlePhoto}>{add}</button>
      </div>
    );
  }
}

export default TweetBox;
