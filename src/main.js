//Gustavo

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Start, Neutral, Beach, Picker, Market, MyMarket] // add four scenes
}


const game = new Phaser.Game(config)
const {width, height} = game.config
const centerX = game.config.width / 2
const centerY = game.config.height / 2
let cursors = null