
/**
 * winState
 */
var winState = {
    create: function () {
        console.log('winState created');
        // text(x, y, text, {font, color}
        var nameLabel = game.add.text(
            80, 80, 'YOU WON!',
            {font: '50px Arial', fill: '#00ff00'
        });
        var startLabel = game.add.text(
            80, game.height - 80,
            'press "W" to restart',
            {font: '25px Arial', fill: '#ffffff'
        });

        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        wkey.onDown.addOnce(this.restart, this);
    },

    restart: function () {
        game.state.start('play');
    },
};
