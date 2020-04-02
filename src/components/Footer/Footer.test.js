import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('Footer component', () => {
  
  let component
  //every time each test runs, this gonna run first; it gonna reset the component
  beforeEach(() => {
    component = shallow(<Footer />)
  })
  it('should render as expected', () => {
    expect(component.contains(<p>Photo by Kevin Young on Unsplash</p>)).toBe(true)
  })
})