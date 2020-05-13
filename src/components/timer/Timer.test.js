import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('Timer component', () => {
  it('renders Timer', () => {
    const wrapper = shallow(<Timer time={60} />);
    expect(wrapper).toMatchSnapshot();
  });
});

