import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from './SearchResults';

// Mocking the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ collection: { items: [] } }),
  })
);

describe('SearchResults Component', () => {
  it('fetches and displays search results', async () => {
    // Render the component with the desired initial route
    const { getByText } = render(<SearchResults />, { route: '/search?query=nebula' });

    // Wait for any asynchronous operations to complete
    // This is necessary because fetchData is an async function
    await new Promise((resolve) => setTimeout(resolve, 0));

    // Check if the component displays the expected content
    expect(getByText('No items found in data.')).toBeInTheDocument();
  });
});
