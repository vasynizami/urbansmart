import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  
  let component;

  beforeEach(() => {
    component = shallow(<Header />)
  });

  it('contains city stats link', () => {
    expect(component.contains(<p>city stats</p>)).toBe(true)
  });
  
  it('contains home link', () => {
    expect(component.contains(<p>home</p>)).toBe(true)
  });

  it('renders as expected', () => {
    expect(component).not.toBeNull();
  });

})  