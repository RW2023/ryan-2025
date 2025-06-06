# Testing Guide

This project uses **Jest** with **React Testing Library** for unit testing.

## Running Tests

- `npm test` - run all tests once.
- `npm run test:coverage` - run tests and generate a coverage report in the `coverage/` folder.

## Directory Structure

```
tests/
  getBadgeColor.test.ts       # utility function example
  components/
    Button.test.tsx           # component tests
  hooks/
    useToggle.test.tsx        # custom hook tests
```

Place new tests beside similar ones so they remain easy to navigate.

## Writing Tests

### Utilities
Use standard Jest assertions to test pure functions. Example:

```ts
import { getBadgeColor } from '../src/utils/getBadgeColor';

it('returns default color for unknown tool', () => {
  expect(getBadgeColor('Unknown')).toBe('bg-base-300 text-base-content');
});
```

### Components
Render components with React Testing Library and query the DOM.

```tsx
import { render, screen } from '@testing-library/react';
import Button from '@/components/Button';

test('links to the provided href', () => {
  render(<Button href="/about" label="About" />);
  expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '/about');
});
```

### Hooks
Use `renderHook` and `act` helpers to interact with custom hooks.

```tsx
import { renderHook, act } from '@testing-library/react';
import useToggle from '@/hooks/useToggle';

test('toggles value', () => {
  const { result } = renderHook(() => useToggle());
  act(() => result.current.toggle());
  expect(result.current.value).toBe(true);
});
```

## Recommended Additional Tests

- **Components**: Navbar navigation links, ProjectCard content and navigation, Footer rendering, DarkModeToggle interactions, ContactSection form behavior.
- **Hooks**: Any stateful or data-fetching hooks used across the app.
- **Utilities**: Date formatting, slug creation, numeric calculations, or any helper logic.

Aim for deterministic tests that cover both typical and edge cases.
