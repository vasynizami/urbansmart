import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import Main from '../Main/Main';

describe('Home component', () => {

  let component;
  
  beforeEach(() => {
    component = shallow(<Home />)
  });
  
  it('renders', () => {
    expect(component).not.toBeNull();
  });

  it('has main component', () => {
    expect(component.contains(<Main />)).toBe(true)
  });

})