var menu_state = {
    create: function() {
        console.log('menu');
        var nameLabel = game.add.text(game.width * 0.4, 200, 'Mega\nMecha\nMarxist\nII', {
            font: "35px prstart",
            fill: "#FFFFFF",
            align: "center"
        });

        var nameLabel = game.add.text(game.width * 0.25, game.height/2, 'Press Space to begin', {
            font: "35px prstart",
            fill: "#FFFFFF",
            align: "center"
        });

        var start_button = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        start_button.onDown.addOnce(this.start, this);

    },

    start: function() {
        console.log('do it');
        game.state.start('play');
    }
}