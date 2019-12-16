import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import ComponentsScreen from './src/screens/ComponentsScreen';

describe('Component Screen', () => {
  /*
    test('Should render Component Screen', () => {
      const wrapper = mount(<ComponentsScreen />)
      expect(wrapper)
    });
    */
  
    test('Should match to snapshot', () => {
        const component = shallow(<ComponentsScreen label="test label" />)
        expect(component).toMatchSnapshot()
    });

    test('Should have 1 child', () => {
        const parent = renderer.create(<ComponentsScreen />).toJSON();
        expect(parent.children.length).toBe(1);
    });
  
    test('Should toggle accordion list', () => {
        /*
      const onPressEvent = jest.mock('TouchableOpacity', () => {
          const mockComponent = require('react-native/jest/TouchableOpacity');
          return mockComponent('TouchableOpacity');
      });
      onPressEvent.mockReturnValue('Link on press involved');
      const wrapper = shallow(<ComponentsScreen onPress={onPressEvent} text='ComponentsScreen Component'/>);
      wrapper.find(Text).first().props().onPress();
      expect(onPressEvent.mock.calls.length).toBe(1);
      */
      let handleToggleMock = jest.fn()
      let component = renderer.create(
        <ComponentsScreen
          handleToggle={handleToggleMock}
        />
      ).getInstance()
      component.toggleExpanded()
      const text = 'Hello'
      component.setSections(text)
      //expect(handleToggleMock).not.toBeCalled()
    })
  });