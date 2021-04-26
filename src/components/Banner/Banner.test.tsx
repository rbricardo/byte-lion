import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Banner from './Banner'

const userData = {
  googleId: '123',
  imageUrl: 'test',
  email: 'test@gmail.com',
  name: 'test test',
  givenName: 'test',
  familyName: 'test'
}

describe('testing Banner component', () => {
  it('should be able to show the p element', () => {
    render(<Banner />)
    const pElement = screen.getByText(/hi user/i)
    expect(pElement).toBeInTheDocument()
  })

  it('should be able to show the p element with user name', () => {
    render(<Banner userData={userData} />)
    const pElement = screen.getByText(/hi test/i)
    // expect(pElement).toBeInTheDocument()
    expect(pElement).toBe(`Hi ${userData.givenName}`)
  })
})
