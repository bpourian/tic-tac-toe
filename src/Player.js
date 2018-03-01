function Player() {
  this.count = 1;
}

Player.prototype.player1 = function () {
  console.log("Player X:");
  return "X";
};

Player.prototype.player2 = function () {
  console.log("Player O:");
  return "O";
};

Player.prototype.nextPlayer = function () {
    if (this.count % 2) {
      this.count += 1;
      return this.player1();

    }else {
      this.count += 1;
      return this.player2();
    }
};
