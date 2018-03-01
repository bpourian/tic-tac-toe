describe("Player Unit Tests", function () {
  var player;

  beforeEach(function () {
    player = new Player();
  });

  it("Should return player1 with X", function () {
    expect(player.player1()).toEqual("X");
  });

  it("Should return player2 with X", function () {
    expect(player.player2()).toEqual("O");
  });

  it("Alternate between players", function () {
    expect(player.nextPlayer()).toEqual("X");
    expect(player.nextPlayer()).toEqual("O");
  });
});
