function Player() {
  this.count = 1;
}

Player.prototype.player1 = function () {
  return "X";
};

Player.prototype.player2 = function () {
  return "O";
};

Player.prototype.nextPlayer = function () {

    if (this.count % 2) {
      this.count += 1;
      return this.player1();

    }else {
      console.log("test");
      this.count += 1;
      return this.player2();
    }
};
