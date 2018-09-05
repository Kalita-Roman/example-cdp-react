import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('App.jsx', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});