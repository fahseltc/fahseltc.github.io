var game = new Phaser.Game(1400, 900, Phaser.CANVAS, 'game', Phaser.AUTO);

game.state.add('menu', menu_state);
game.state.add('play', play_state);
game.state.add('boot', boot_state);
game.state.add('load', load_state);

game.state.start('boot');
