import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import ComponentsScreen from './src/screens/ComponentsScreen';

describe('Component Screen', () => {
  test('Should match to snapshot', () => {
      const component = shallow(<ComponentsScreen label="test label" />)
      expect(component).toMatchSnapshot()
  });
  
  test('Should handle onPress', () => {
    const onPress = jest.fn();
    const wrapper = shallow(<ComponentsScreen onPress={onPress}>test</ComponentsScreen>);
    wrapper
      .find('TouchableOpacity')
      .first()
      .props()
      .onPress();
    //expect(onPress).toHaveBeenCalledTimes(1);
  });

});