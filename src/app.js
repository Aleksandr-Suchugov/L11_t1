import Team from './team';

const bowman = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};
const speaker = {
  name: 'Болтун',
  type: 'Speaker',
  health: 150,
  level: 2,
  attack: 10,
  defence: 10,
};
const comandor = {
  name: 'Атаман',
  type: 'Comandor',
  health: 120,
  level: 5,
  attack: 40,
  defence: 40,
};
const swordsman = {
  name: 'Козак',
  type: 'Swordsman',
  health: 100,
  level: 2,
  attack: 50,
  defence: 30,
};
const banda = new Team();

banda.addHero(bowman);
banda.addHero(speaker);
banda.addHero(comandor);
banda.addHero(swordsman);

for (const hero of banda) {
  console.log(hero);
}
