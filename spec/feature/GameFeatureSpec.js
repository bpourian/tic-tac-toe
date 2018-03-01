describe("Game Feature Tests", function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  it("Should display grid numbered between 1 - 9", function() {
    expect(game.showGrid()).toEqual('\n' +
        ' ' + 1 + ' | ' + 2 + ' | ' + 3 + '\n' +
        ' ---------\n' +
        ' ' + 4 + ' | ' + 5 + ' | ' + 6 + '\n' +
        ' ---------\n' +
        ' ' + 7 + ' | ' + 8 + ' | ' + 9 + '\n');
  });

  it("Update player X position on grid and display it", function () {
    game.playerChosePosition(4);
    expect(game.showGrid()).toEqual('\n' +
        ' ' + 1 + ' | ' + 2 + ' | ' + 3 + '\n' +
        ' ---------\n' +
        ' ' +"X"+ ' | ' + 5 + ' | ' + 6 + '\n' +
        ' ---------\n' +
        ' ' + 7 + ' | ' + 8 + ' | ' + 9 + '\n');
  });
});
