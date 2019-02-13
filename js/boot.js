WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() { game.time.events.add(Phaser.Timer.SECOND, this.createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Sniglet']
    }

};

/**
 * bootState
 *
 * Here you init Phaser physics system, and declare 3rd party dependencies
 * @note: Name must be consistent with import in app.js
 */
var bootState = {
    preload: function () {
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js');
    },

    create: function () {
        //console.log('bootState loaded');
        // Load basic ARCADE physics.
        // Other options include:
        //      - P2JS (space orbit / floating)
        //      - NINJA (slope physics)
        //      - BOX2D (3D collision, requires plugin)
        //      - ISOARCADE (from Isometric plugin)
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 150;
        // proceed to load.js
        game.state.start('load');
    }
};
