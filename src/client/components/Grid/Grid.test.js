import React from 'react';
import { shallow } from 'enzyme';
import Grid from './Grid';

test('Grid.jsx', () => {
    const wrapper = shallow(<Grid items={[{}]}/>);
    expect(wrapper).toMatchSnapshot();
});