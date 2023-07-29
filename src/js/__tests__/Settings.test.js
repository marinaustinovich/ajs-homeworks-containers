import showSettings, { Settings } from '../Settings';

test('should create Settings.Map with default values', () => {
  expect(new Settings().defaultSettings).toEqual(
    new Map()
      .set('theme', 'dark')
      .set('music', 'trance')
      .set('difficulty', 'easy'),
  );
});

test.each([
  [
    'Default settings',
    new Map()
      .set('theme', 'dark')
      .set('music', 'trance')
      .set('difficulty', 'easy'),
  ],
  [
    'Custom settings',
    [
      ['theme', 'light'],
      ['music', 'trance'],
      ['difficulty', 'nightmare'],
    ],
    new Map()
      .set('theme', 'light')
      .set('music', 'trance')
      .set('difficulty', 'nightmare'),
  ],
  [
    'Custom settings without music',
    [['theme', 'light'], ['difficulty', 'nightmare']],
    new Map()
      .set('theme', 'light')
      .set('music', 'trance')
      .set('difficulty', 'nightmare'),
  ],
  [
    'Custom settings with one key',
    [['theme', 'light']],
    new Map()
      .set('theme', 'light')
      .set('music', 'trance')
      .set('difficulty', 'easy'),
  ],
])('should return Map with new values: %s', (name, args, expected) => {
  expect(showSettings(...args)).toEqual(expected);
});
