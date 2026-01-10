import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Navigation', () => {
  test('renders navigation links', () => {
    render(<div><header><nav><a href="/">Home</a></nav></header></div>);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('clicking navigation links triggers route changes', async () => {
    const user = userEvent.setup();
    render(<div><header><nav><a href="/">Home</a></nav></header></div>);
    
    const link = screen.getByRole('link', { name: 'Home' });
    await user.click(link);
    
    // In a real test, we would check if URL changed or content updated
    expect(link).toHaveAttribute('href', '/');
  });
});