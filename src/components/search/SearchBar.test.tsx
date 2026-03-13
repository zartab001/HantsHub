/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

import { useRouter } from 'next/navigation';
import { useSearchStore } from '@/store/searchStore';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/store/searchStore', () => ({
  useSearchStore: jest.fn(),
}));

describe('SearchBar', () => {
  const push = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push,
    });

    (useSearchStore as unknown as jest.Mock).mockReturnValue({
      query: '',
      location: 'All Hampshire',
      setQuery: jest.fn(),
      addRecentSearch: jest.fn(),
      loadFromStorage: jest.fn(),
    });
  });

  test('renders search input', () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText(/search services/i);

    expect(input).toBeInTheDocument();
  });

  test('submits search query', async () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText(/search services/i);
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, 'clean');
    await userEvent.click(button);

    expect(push).toHaveBeenCalled();
  });
});
