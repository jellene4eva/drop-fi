/**
 * playState
 *
 * play screen
 */

var playState = {

    preload: function () {
        this.words = game.cache.getJSON('words');
    },

    create: function () {
        console.log('playState created');
        this.playerScore = 0;
        this.background = game.add.sprite(0, 0, 'background');
        this.background.height = game.height;

        // @todo: center align text
        this.FinnishWord = game.add.text(
            0, game.height-200, "",
            {
                font: '80px Sniglet',
                fill: '#FF0000',
                stroke: '#fff',
                strokeThickness: 4,
                boundsAlignH: "center"
            }
        );

        this.ScoreLabel = game.add.text(
            40, 40, "Click the image based on the text below!",
            {
                font: '40px Sniglet',
                fill: '#EBA128',
                wordWrap: true,
                wordWrapWidth: 400,
                stroke: '#fff',
                strokeThickness: 4
            }
        );
        this.ScoreLabel.setShadow(5, 5, 'rgba(0,0,0,0.5)', 10);

        this.SpawnWord();

        this.images = game.add.physicsGroup();
        // loop(time, function, where)
        game.time.events.loop(Phaser.Timer.SECOND * 2, this.SpawnImage, this);
    },

    update: function () {
        this.images.forEach(this.destroyMissed, this);
    },

    Win: function () {
        game.state.start('win');
    },

    SpawnWord: function () {
        //Randomly choose word from JSON
        this._FinnishWord = this.fetchRandom(this.words);
        this.answer = this._FinnishWord.en;
        this.FinnishWord.text = this._FinnishWord.fi;
    },

    SpawnImage: function () {
        name = this.fetchRandom(this.words).en;
        console.log(name);
        item = this.images.create(
            game.world.randomX - 60, 0,
            'images', name + '.png'
        );
        // Giving it a name so that we can kill by name later
        item.name = name;

        // This is to make it fall, using physics to drive Y pos
        game.physics.enable(item, Phaser.Physics.ARCADE);
        // onClick, call AddScore action
        item.inputEnabled = true;
        item.events.onInputUp.add(this.AddScore, this);
    },

    AddScore: function (item) {
        if (item.name == this.answer) {
            item.destroy();
            this.playerScore += 1;
            this.ScoreLabel.text = this.playerScore + " pts";
            this.SpawnWord();
        }
    },

    // @todo: Score not reducing when missed
    destroyMissed: function (item) {
        if (item.y > game.height) {
            if (item.name == this.name) {
                this.playerScore -= 1;
                this.ScoreLabel.text = this.playerScore + " pts";
            }
            item.destroy();
        }
    },

    fetchRandom: function (obj) {
        var temp_key, keys = [];
        for(temp_key in obj) {
           if(obj.hasOwnProperty(temp_key)) {
               keys.push(temp_key);
           }
        }
        return obj[keys[Math.floor(Math.random() * keys.length)]];
    }
};

