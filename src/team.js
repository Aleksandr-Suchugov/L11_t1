export default class Team {
  constructor() {
    this.team = {};
  }

  addHero(obj) {
    this.team[obj.type] = obj;
  }

  [Symbol.iterator]() {
    const keys = Object.keys(this.team);
    const limit = keys.length;
    let counter = -1;
    const $this = this.team;
    return {
      next() {
        if (counter < limit) {
          return {
            done: false,
            value: $this[keys[counter += 1]],
          };
        }
        return {
          daone: true,
          value: undefined,
        };
      },
    };
  }
}
