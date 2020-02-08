import React from 'react';
import { render } from '@testing-library/react';
import App from './App.Routes';

test('renders /machines link', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/machines/i);
	expect(linkElement).toBeInTheDocument();
});

test('renders /home link', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/home/i);
	expect(linkElement).toBeInTheDocument();
});
