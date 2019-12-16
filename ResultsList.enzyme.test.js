import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ResultsList from './src/components/ResultsList';
import FlatList from 'react-native';

describe('ResultsList', () => {
    test('Should render ResultsList', () => {
        const component = shallow(<ResultsList />);
        expect(component).toMatchSnapshot();
    });

});
