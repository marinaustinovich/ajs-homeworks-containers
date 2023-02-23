import Character from './Character';

export class Team {
  constructor() {
    this.members = new Set();
  }

  add(newPerson) {
    const { size } = this.members;
    this.members.add(newPerson);

    if (size === this.members.size) {
      throw new Error('The value isn`t unique');
    }
  }

  addAll(...newPeople) {
    newPeople.forEach((size) => this.members.add(size));
  }

  toArray() {
    this.members = [...this.members];
  }
}

export default function showCreatingTeam() {
  const myTeam = new Team();
  const first = new Character('Marina', 'Bowerman', 50, 50);
  const second = new Character('Ann', 'Daemon', 40, 20);
  const third = new Character('John', 'Daemon', 40, 20);
  const fourth = new Character('Jane', 'Bowerman', 50, 50);

  myTeam.add(first);
  myTeam.add(second);

  // myTeam.add(first);

  myTeam.addAll(first, third, fourth);
 
  myTeam.toArray();
  const arrayPeople = myTeam.members;
  console.log('Transfered Set to Array', arrayPeople);

  return arrayPeople;
}
