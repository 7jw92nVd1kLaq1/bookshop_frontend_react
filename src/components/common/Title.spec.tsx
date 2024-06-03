import { render, screen } from '@testing-library/react';
import Title from './Title';
import { BookStoreThemeProvider } from '../../context/themeContext';

describe('Title', () => {
  it('should render the title', () => {
    render((
      <BookStoreThemeProvider>
        <Title size="large" color="primary">Welcome to the Bookstore</Title>
      </BookStoreThemeProvider>
    ));
    const title = screen.getByText(/Welcome to the Bookstore/i);
    expect(title).toBeInTheDocument();
  });
});