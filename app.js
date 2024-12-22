const team = {
  _players: [
    { firstName: "Alex", lastName: "De Souza", age: 30 },
    { firstName: "Tuncay", lastName: "Şanlı", age: 22 },
    { firstName: "Serhat", lastName: "Akın", age: 24 },
  ],

  _games: [
    { opponent: "Galatasaray", teamPoints: 6, opponentPoints: 0 },
    { opponent: "Beşiktaş", teamPoints: 4, opponentPoints: 2 },
    { opponent: "Kocaelispor", teamPoints: 3, opponentPoints: 0 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Titans", 100, 98);
console.log(team.games);
