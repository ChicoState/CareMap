/**
 * @jest-environment jsdom
 */
import React from 'react';
import renderer from 'react-test-renderer'
import { mount, render, shallow } from 'enzyme';
import ChildcareImageDetail from './src/components/ChildcareImageDetail';

describe('Component tested with airbnb enzyme', () => {
  test('ChildCareImageDetail correctly rendered', () => {
    const wrapper = mount(<ChildcareImageDetail />)
    expect(wrapper).not.toBe.NULL;
  });
  test('should match to snapshot', () => {
    const component2 = render(<ChildcareImageDetail label="detailscreen snapshot test"/>)
    expect(component2).toMatchSnapshot();
  });

});
