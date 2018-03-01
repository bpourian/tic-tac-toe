function Game(player) {
  this.gridArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.player_class = player;
}

Game.prototype.showGridArray = function () {
  return this.gridArray;
};


Game.prototype.showGrid = function () {

  return ('\n' +
        ' ' + this.gridArray[0] + ' | ' + this.gridArray[1] + ' | ' + this.gridArray[2] + '\n' +
        ' ---------\n' +
        ' ' + this.gridArray[3] + ' | ' + this.gridArray[4] + ' | ' + this.gridArray[5] + '\n' +
        ' ---------\n' +
        ' ' + this.gridArray[6] + ' | ' + this.gridArray[7] + ' | ' + this.gridArray[8] + '\n');
};


Game.prototype.updatePosition = function(grid_position) {
  this.gridArray[grid_position - 1] = "X";
};

Game.prototype.playerChosePosition = function(grid_position) {
  this.updatePosition(grid_position);
  this.showGrid();
};

Game.prototype.playerTurn = function (turn) {
  return "X";
};
