import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main component', () => {

  let component;
  
  beforeEach(() => {
    component = shallow(<Main />)
  });
  
  it('renders', () => {
    expect(component).not.toBeNull();
  });

  it('has app name', () => {
    expect(component.contains("urbanSmart")).toBe(true)
  });

  it('has subhead', () => {
    expect(component.contains(<p>quality of life data on any city</p>)).toBe(true)
  });
  
})