/**
 * loadState
 *
 * Here is where you declare all your assets and loading screen
 */
var loadState = {
    // @todo: add sound
    preload: function() {
        console.log('loadState loaded');
        var loadingLabel = game.add.text(
            80, 150, 'Loading...',
            {font: '30px Courier', fill: '#ffffff'}
        );

        game.load.image('background', 'assets/sky5.png');
        game.load.json('words', 'words.json');
        game.load.atlasJSONHash('images', 'assets/images.png', 'images.json');
    },

    create: function () {
        // launch menu when loaded
        game.state.start('menu')
    },
};
