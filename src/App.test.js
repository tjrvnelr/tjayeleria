import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('framer-motion', () => {
  const React = require('react');
  const motion = new Proxy(
    {},
    {
      get:
        () =>
        ({ animate, children, initial, transition, viewport, whileHover, whileInView, ...props }) =>
          React.createElement('div', props, children),
    }
  );

  return {
    motion,
    useScroll: () => ({ scrollYProgress: 0 }),
    useSpring: () => 0,
  };
});

beforeAll(() => {
  class IntersectionObserverMock {
    observe() {}
    disconnect() {}
  }

  window.IntersectionObserver = IntersectionObserverMock;
  window.scrollTo = jest.fn();
});

test('renders the portfolio hero and navigation', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /building elegant web experiences with precise interaction design/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /go to home/i })).toBeInTheDocument();
  expect(screen.getByText(/selected work with thoughtful interaction/i)).toBeInTheDocument();
});
