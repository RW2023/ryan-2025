import { render, screen } from '@testing-library/react';
import Button from '../../src/components/Button';

describe('Button component', () => {
  it('renders label and link', () => {
    render(<Button href="/about" label="About" />);
    const link = screen.getByRole('link', { name: /about/i });
    expect(link).toHaveAttribute('href', '/about');
  });

  it('shows icon when icon prop is true', () => {
    const { container } = render(<Button href="/" label="Home" icon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
