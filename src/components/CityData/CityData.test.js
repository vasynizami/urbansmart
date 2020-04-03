import React from 'react'
import { shallow } from 'enzyme'
import CityData from './CityData';


describe('CityData component', () => {

  let component;

  beforeEach(() => {
    component = shallow(<CityData />)
  });

  it('renders', () => {
    expect(component).not.toBeNull();
  });

  it('shows default input', () => {
    expect(component.find('input').text()).toEqual("");
  });

  it('there is a button', () => {
    const button = <button>submit</button>
    expect(component.containsMatchingElement(button)).toBe(true);
  });
  
})
