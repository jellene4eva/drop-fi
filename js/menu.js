/**
 * menuState
 *
 * Main menu screen at start of game
 */
var menuState = {
    create: function () {
        console.log('menuState created');
        this.background = game.add.sprite(0, 0, 'background');
        this.background.height = game.height;

        // text(x, y, text, {font, color}
        var nameLabel = game.add.text(
            110, 80, 'Learn Finnish Today!',
            {
                font: '80px Sniglet',
                fill: '#eee',
                wordWrap: true,
                wordWrapWidth: 300,
                align: 'center'
            }
        );
        nameLabel.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

        var startLabel = game.add.text(
            140, game.height-200,
            'Tap to Start',
            {
                font: '40px Sniglet',
                fill: '#EF2020',
                stroke: '#ffffff',
                strokeThickness: 4
            }
        );
        // Fade in-out anim effect
        startLabel.alpha = 0.3;
        var tween = game.add.tween(startLabel).to( { alpha: 1 }, 2000, "Linear", true).loop(true);
        tween.yoyo(true, 500);

        game.input.onDown.addOnce(this.start, this);
    },

    start: function () {
        game.state.start('play');
    },
};
