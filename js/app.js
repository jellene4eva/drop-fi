/**
 * Here you init new Phaser instance and load other JS files within
 */

// Game(width, height, Phaser engine, div element to insert)
// Option for Phaser Engine:
//      - WEBGL
//      - CANVAS
//      - AUTO ( This will try to use WEBGL, and fallback to CANVAS)
var game = new Phaser.Game(480, 800, Phaser.AUTO, 'app');

// Adding game states from all the other js files
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);

// Start the game
game.state.start('boot');

