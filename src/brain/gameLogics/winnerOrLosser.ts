export default class WOL {
  constructor() {}
  checkWinner(cells: any[]): any {
    const lines = [
      [0,
        1,
        2],
      [3,
        4,
        5],
      [6,
        7,
        8],
      [0,
        3,
        6],
      [1,
        4,
        7],
      [2,
        5,
        8],
      [0,
        4,
        8],
      [2,
        4,
        6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a,
        b,
        c] = lines[i];
      if (
        cells[a] &&
        cells[a] === cells[b] &&
        cells[a] === cells[c]
      ) {
        cells[a] = cells[a].toLowerCase();
        cells[b] = cells[a].toLowerCase();
        cells[c] = cells[a].toLowerCase();
        return cells[a] === cells[a].toLowerCase() ? cells[a].toUpperCase() : cells[a];
      }
    }
    return null;
  }
}