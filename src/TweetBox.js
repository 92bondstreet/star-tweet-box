import React, {Component} from 'react';

const BEFORE_OVERFLOW = 10;
const PHOTO_ADDED = 23;

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
    this.setState(Object.assign({}, this.state, {'content': event.target.value}));
  }

  handlePhoto () {
    this.setState(Object.assign({}, this.state, {'photo': ! this.state.photo}));
  }

  tooLong () {
    const {content, photo} = this.state;
    const limit = 140 - (PHOTO_ADDED * photo | 0);

    const before = content.substring(limit - BEFORE_OVERFLOW, limit);
    const overflow = content.substring(limit);

    return (
      <div className="alert alert-warning zz-too-long">
        <strong>Oops! Too Long:</strong>
        &nbsp;...{before}
        <strong className="bg-danger">{overflow}</strong>
      </div>
    );
  }

  /**
   * Render tweet box
   */
  render () {
    const {content, photo} = this.state;
    const count = 140 - content.length - (PHOTO_ADDED * photo | 0);
    const tooLong = count < 0;
    const disabled = count === 140 || tooLong;
    const photoLabel = this.state.photo ? '✓ Photo Added' : 'Add Photo';

    return (
      <div className="well clearfix">
        {tooLong && this.tooLong()}
        <textarea className="form-control" onChange={this.handleContent}></textarea>
        <br/>
        <span>{count}</span>
        <button className="btn btn-primary pull-right zz-tweet" disabled={disabled}>Tweet</button>
        <button className="btn btn-default pull-right zz-photo" onClick={this.handlePhoto}>{photoLabel}</button>
      </div>
    );
  }
}

export default TweetBox;
