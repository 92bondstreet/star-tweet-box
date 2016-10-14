import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import TweetBox from '../src/TweetBox';

describe('<TweetBox />', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<TweetBox />, div);
  });

  it('should render the tweet box', () => {
    const wrapper = shallow(<TweetBox />);

    expect(wrapper.find('textarea.form-control').length).toBe(1);
    expect(wrapper.find('button.zz-tweet').length).toBe(1);
    expect(wrapper.find('button.zz-photo').length).toBe(1);
  });

  it('should update state `content`', () => {
    const wrapper = shallow(<TweetBox />);
    const target = {
      'target': {
        'value': 'my new tweet'
      }
    };

    wrapper.find('textarea').simulate('change', target);
    expect(wrapper.state('content')).toEqual('my new tweet');
  });

  it('should update state `photo`', () => {
    const wrapper = shallow(<TweetBox />);

    wrapper.find('button.zz-photo').simulate('click');
    expect(wrapper.state('photo')).toEqual(true);
  });

  it('should render too long alert', () => {
    const wrapper = shallow(<TweetBox />);
    const tooLong = shallow(wrapper.instance().tooLong());

    expect(tooLong.find('div.zz-too-long').length).toBe(1);
  });

  it('should render too long alert if the content > 140', () => {
    const wrapper = shallow(<TweetBox />);

    const target = {
      'target': {
        'value': 'iidsfhqsjdghfhjfgjhfsdhjdfhjgjdshfgjhfdghjfdsgjfhdjkgjdfhgjhfdgjhfdgjdfsgjhfghjfghjfdsghjfdsgjhdfghjfdsghjfdsghjdfshjgfdjhgfjhghjsdfghjdfsgjhfdjfgjkf'
      }
    };

    wrapper.find('textarea').simulate('change', target);
    expect(wrapper.find('div.zz-too-long').length).toBe(1);
  });
});
