import showCreatingTeam, { Team } from '../Team';
import Character from '../Character';

test('should give new Team for empty prop members', () => {
  const result = new Team();
  expect(result.members).toEqual(new Set());
});

test('should add once person to Team', () => {
  const result = new Team();
  const first = new Character('Marina', 'Bowerman', 50, 50);
  result.add(first);
  expect(result.members).toEqual(new Set().add(first));
});

test('should be Error for adding one person twice', () => {
  const result = new Team();
  const first = new Character('Marina', 'Bowerman', 50, 50);
  result.add(first);
  expect(() => result.add(first)).toThrow('The value isn`t unique');
});

test('should add a few people to Team at once', () => {
  const result = new Team();
  const first = new Character('Marina', 'Bowerman', 50, 50);
  const second = new Character('Ann', 'Daemon', 40, 20);
  result.addAll(first, second);
  const expected = new Set();
  expected.add(first);
  expected.add(second);
  expect(result.members).toEqual(expected);
});

test('should transfer Set to Array', () => {
  const result = new Team();
  const first = new Character('Marina', 'Bowerman', 50, 50);
  const second = new Character('Ann', 'Daemon', 40, 20);
  result.addAll(first, second);
  result.toArray();
  expect(result.members).toEqual([first, second]);
});

test('should show Team with four people and array Characters', () => {
  const expected = [
    {
      name: 'Marina',
      type: 'Bowerman',
      health: 100,
      level: 1,
      attack: 50,
      defence: 50,
    },
    {
      name: 'Ann',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 40,
      defence: 20,
    },
    {
      name: 'John',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 40,
      defence: 20,
    },
    {
      name: 'Jane',
      type: 'Bowerman',
      health: 100,
      level: 1,
      attack: 50,
      defence: 50,
    },
  ];
  expect(showCreatingTeam()).toEqual(expected);
});
