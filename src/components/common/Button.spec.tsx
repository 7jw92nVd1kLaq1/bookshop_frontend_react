import { render, screen } from '@testing-library/react'

import Button from './Button'
import { BookStoreThemeProvider } from '../../context/themeContext'

describe('Button', () => {
  it('should render the button', () => {
    render((
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary" disabled={false} isLoading={false}>Get Started</Button>
      </BookStoreThemeProvider>
    ))
    const button = screen.getByText(/Get Started/i)
    expect(button).toBeInTheDocument()
  })
})