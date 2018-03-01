describe("Game Unit Tests", function() {
  var game;
  var player;

  beforeEach(function() {
    player = new Player();
    game = new Game(player);
  });

  it("Grid Array should be numbered between 1 - 9", function() {
    expect(game.showGridArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });


  it("Update player position when called", function () {
    game.updatePosition(3);
    expect(game.showGridArray()).toEqual([1, 2, "X", 4, 5, 6, 7, 8, 9]);
  });

  it("Ask player X for a move", function () {
    spyOn(game, "updatePosition");
    spyOn(game, "showGrid");

    game.playerChosePosition("X");
    expect(game.updatePosition).toHaveBeenCalled();
    expect(game.showGrid).toHaveBeenCalled();
  });

  it("Should alternate between player X and O", function () {
    spyOn(player, "nextPlayer");

    game.playerTurn();
    expect(player.nextPlayer).toHaveBeenCalled();
  });
});
