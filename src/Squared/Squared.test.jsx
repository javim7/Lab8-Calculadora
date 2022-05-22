import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Squared from './Squared'

it('renders', () => {
  render(<Squared />)
})

it('renders the text squared', () => {
  render(<Squared />)

  const element = screen.getByText(/Squared\:/)
  expect(element).toBeInTheDocument()
})

it('renders the squared of 2', () => {
  render(<Squared mum={2} />)

  const element = screen.getByText(/4/)
  expect(element).toBeInTheDocument()
})