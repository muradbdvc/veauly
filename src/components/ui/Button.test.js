import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

describe('Button Component', () => {
  test('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('applies variant classes correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn', 'btn--primary');
  });

  test('handles disabled state', () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});

describe('Card Component', () => {
  test('renders children and accepts props', () => {
    render(<Card variant="elevated">Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
    expect(screen.getByRole('generic')).toBeInTheDocument();
  });

  test('applies variant and padding classes', () => {
    const { rerender } = render(<Card variant="outlined" padding="large">Card Content</Card>);
    expect(screen.getByRole('generic')).toHaveClass('card', 'card--outlined', 'card--padding-large');
  });
});