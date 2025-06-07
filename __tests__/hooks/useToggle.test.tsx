import { renderHook, act } from '@testing-library/react';
import useToggle from '../../src/hooks/useToggle';

describe('useToggle hook', () => {
  it('toggles boolean value', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.value).toBe(false);
    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toBe(true);
  });
});
