/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import ImageScreen from './src/screens/ImageScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
//import SearchScreen from './src/screens/SearchScreen';
//import DetailScreen from './src/screens/DetailScreen';

describe('Image Screen', () => {
  test('Should render Image Screen', () => {
    const tree = renderer.create(<ImageScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should have 1 child', () => {
    const parent = renderer.create(<ImageScreen />).toJSON();
    console.log(parent.children.length);
    expect(parent.children.length).toBe(5);
  });
});
