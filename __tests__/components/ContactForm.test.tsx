import { render, screen } from '@testing-library/react';
import ContactForm from '../../src/components/ContactForm';

test('renders contact form heading', () => {
  render(<ContactForm />);
  expect(screen.getByRole('heading', { name: /contact me/i })).toBeInTheDocument();
});
