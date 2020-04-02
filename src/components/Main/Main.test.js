import React from 'react'
import { shallow } from 'enzyme'
import Main from './Main'

describe('Main component', () => {
  let component
  //every time each test runs, this gonna run first; it gonna reset the component
  beforeEach(() => {
    component = shallow(<Main />)
  })
	
  it('should render as expected', () => {
    // checks if our component renders urbanSmart text
    expect(component.contains("urbanSmart")).toBe(true)
  })
})