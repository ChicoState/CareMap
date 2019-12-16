import React from 'react';
import renderer from 'react-test-renderer';
import { mount, render, shallow } from 'enzyme';
import useResults from './src/hooks/useResults';

describe('Component tested with airbnb enzyme', () => {
  test('ResultsDetail correctly rendered', () => {
    const wrapper = render(<useResults />)
    expect(wrapper).not.toBe.NULL;
  });
  test('should match to snapshot', () => {
    const wrap = render(<useResults label="detailscreen snapshot test"/>)
    expect(wrap).toMatchSnapshot();
  });
});
