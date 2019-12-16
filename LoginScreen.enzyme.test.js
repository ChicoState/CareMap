import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Home from './src/components/Home';
import LoginScreen from './src/screens/LoginScreen';

describe('Home', () => {
    test('Should render Home', () => {
        const component = shallow(<Home />);
        expect(component).toMatchSnapshot();
    });
});
