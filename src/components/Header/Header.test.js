import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header component', () => {
  
  let component
  //every time each test runs, this gonna run first; it gonna reset the component
  beforeEach(() => {
    component = shallow(<Header />)
  })

  it('should render as expected', () => {
    expect(component.contains(<p>city stats</p>)).toBe(true)
  })

})  