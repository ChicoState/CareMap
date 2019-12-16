import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import SearchScreen from './src/screens/SearchScreen';

describe('SearchScreen', () => {
    test('Should render SearchScreen', () => {
        const component = shallow(<SearchScreen />);
        expect(component).toMatchSnapshot();
    });

    test('Should handle onPress', () => {
        const onPress = jest.fn();
        const wrapper = shallow(<SearchScreen onPress={onPress}>test</SearchScreen>);
        wrapper
            .find('TouchableOpacity')
            .first()
            .props()
            .onPress();
        //expect(onPress).toHaveBeenCalledTimes(1);
    });

});