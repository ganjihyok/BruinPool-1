import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('test', () => {

    const text = wrapper.text();
    expect(text).toEqual('Hello Hello');
  });
});
