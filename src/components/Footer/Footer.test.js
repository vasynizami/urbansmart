import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  
  let component;

  beforeEach(() => {
    component = shallow(<Footer />)
  });

  it('renders', () => {
    expect(component).not.toBeNull();
  });

  it('has copyright p', () => {
    expect(component.contains(<p>&copy; Vasilya Nizamova</p>)).toBe(true)
  });

  it('has p with credits', () => {
    expect(component.contains(<p>Photo by Kevin Young on Unsplash | Powered by Teleport</p>)).toBe(true)
  });
  
})