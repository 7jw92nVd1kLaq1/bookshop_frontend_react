import { render, screen } from '@testing-library/react'
import React from 'react'

import InputText from './InputText'
import { BookStoreThemeProvider } from '../../context/themeContext'


describe('InputText', () => {
  it('should render the input text', () => {
    render((
      <BookStoreThemeProvider>
        <InputText placeholder="Enter your email" />
      </BookStoreThemeProvider>
    ))
    const input = screen.getByPlaceholderText(/Enter your email/i)
    expect(input).toBeInTheDocument()
  })

  it('forward ref should work', () => {
    const ref = React.createRef<HTMLInputElement>()
    render((
      <BookStoreThemeProvider>
        <InputText placeholder="Enter your email" ref={ref} />
      </BookStoreThemeProvider>
    ))
    expect(ref.current).toBeInTheDocument()
  }
})
