import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';
import Card from './Card';

describe('Button Component', () => {
  test('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('applies variant classes correctly', () => {
    render(<Button variant="primary">Primary Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-violet-600', 'text-white');
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
    expect(screen.getByText('Card Content').closest('div')).toHaveClass('shadow-lg');
  });

  test('applies variant and padding classes', () => {
    render(<Card variant="outlined" padding="large">Card Content</Card>);
    const cardElement = screen.getByText('Card Content').closest('div');
    expect(cardElement).toHaveClass('border', 'p-8');
  });
});