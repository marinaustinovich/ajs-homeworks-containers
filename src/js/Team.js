import Character from './Character';

export class Team {
  constructor() {
    this.members = new Set();
  }

  add(newPerson) {
    if (this.members.has(newPerson)) {
      throw new Error('The character is already in the team.');
    }

    this.members.add(newPerson);
  }

  addAll(...newPeople) {
    newPeople.forEach((newPerson) => {
      this.members.add(newPerson);
    });
  }

  toArray() {
    return [...this.members];
  }
}

export default function showCreatingTeam() {
  const myTeam = new Team();
  const first = new Character('Mari', 'Bowerman', 50, 50);
  const second = new Character('Ann', 'Daemon', 40, 20);
  const third = new Character('John', 'Daemon', 40, 20);
  const fourth = new Character('Jane', 'Bowerman', 50, 50);

  myTeam.add(first);
  myTeam.add(second);

  // myTeam.add(first); // to check the uniqueness of characters.

  myTeam.addAll(first, third, fourth);
  return myTeam.toArray();
}
