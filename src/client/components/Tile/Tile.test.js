import React from 'react';
import { shallow } from 'enzyme';
import Tile from './Tile';

test('Tile.jsx', () => {
    const wrapper = shallow(<Tile />);
    expect(wrapper).toMatchSnapshot();
});