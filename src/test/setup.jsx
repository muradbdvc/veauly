import '@testing-library/jest-dom';

// Test utilities
const renderWithProviders = (ui) => {
  const Wrapper = ({ children }) => <div>{children}</div>;
  return render(ui, { wrapper: Wrapper });
};

// Re-export testing utilities
export * from '@testing-library/react';
export { renderWithProviders };