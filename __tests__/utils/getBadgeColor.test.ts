import { getBadgeColor } from '../../src/utils/getBadgeColor';

describe('getBadgeColor', () => {
  it('returns correct color for known tool', () => {
    expect(getBadgeColor('React')).toBe('bg-blue-500 text-white');
  });

  it('returns default color for unknown tool', () => {
    expect(getBadgeColor('Unknown Tool')).toBe('bg-card text-foreground');
  });
});
