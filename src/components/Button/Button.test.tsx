import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './Button'

describe('clickButton', () => {
  it('should render Button', () => {
    const { getByTitle } = render(
      <Button
        title="btn"
        isLoading={true}
        onClick={() => {
          return null
        }}
      />
    )
    const btn = getByTitle('button')
    expect(btn).toBeTruthy()
  })
  it('onClick', () => {
    const { getByTitle } = render(
      <Button
        title="btn"
        isLoading={false}
        onClick={() => {
          return null
        }}
      />
    )
    const btn = getByTitle('button')
    expect(btn.innerHTML).toBe('btn')
    fireEvent.click(btn)
  })
  it('onClick loading', () => {
    const { getByTitle } = render(
      <Button
        title="btn"
        isLoading={true}
        onClick={() => {
          return null
        }}
      />
    )
    const btn = getByTitle('button')
    expect(btn.innerHTML).toBe('Loading...')
    fireEvent.click(btn)
  })
})
