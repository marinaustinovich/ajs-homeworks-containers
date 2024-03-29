import showCreatingTeam, { Team } from '../Team';
import Character from '../Character';

let result;

beforeEach(() => {
  result = new Team();
});

const createCharacter = (name, type, attack, defence) => new Character(name, type, attack, defence);

test('should create an empty Team', () => {
  expect(result.members).toEqual(new Set());
});

test('should add a person to Team', () => {
  const first = createCharacter('Marina', 'Bowerman', 50, 50);
  result.add(first);
  expect(result.members).toEqual(new Set([first]));
});

test('should throw Error when adding the same person twice', () => {
  const first = createCharacter('Marina', 'Bowerman', 50, 50);
  result.add(first);
  expect(() => result.add(first)).toThrow(
    'The character is already in the team.',
  );
});

test('should add multiple people to Team at once', () => {
  const first = createCharacter('Marina', 'Bowerman', 50, 50);
  const second = createCharacter('Ann', 'Daemon', 40, 20);
  result.addAll(first, second);
  expect(result.members).toEqual(new Set([first, second]));
});

test('should convert Team Set to an Array', () => {
  const first = createCharacter('Marina', 'Bowerman', 50, 50);
  const second = createCharacter('Ann', 'Daemon', 40, 20);
  result.addAll(first, second);
  expect(result.toArray()).toEqual([first, second]);
});

test('should show a Team with four people and array of Characters', () => {
  const expected = [
    {
      name: 'Mari',
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
