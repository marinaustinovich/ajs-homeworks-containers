import showSettings, { Settings } from '../Settings';

test('should create Settings.Map with default values', () => {
  expect(new Settings().settings).toEqual(new Map().set('theme', 'dark').set('music', 'trance').set('difficulty', 'easy'));
});

test('should return Map with default values', () => {
  expect(showSettings()).toEqual(new Map().set('theme', 'dark').set('music', 'trance').set('difficulty', 'easy'));
});

test('should return Map with new values', () => {
  expect(showSettings(['theme', 'light'], ['music', 'trance'], ['difficulty', 'nightmare'])).toEqual(new Map().set('theme', 'light').set('music', 'trance').set('difficulty', 'nightmare'));
});

test('should return Map with new values', () => {
  expect(showSettings(['theme', 'light'], ['difficulty', 'nightmare'])).toEqual(new Map().set('theme', 'light').set('music', 'trance').set('difficulty', 'nightmare'));
});

test('should return Map with new values', () => {
  expect(showSettings(['theme', 'light'])).toEqual(new Map().set('theme', 'light').set('music', 'trance').set('difficulty', 'easy'));
});
