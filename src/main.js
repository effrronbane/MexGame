//Gustavo

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Start, Neutral, Beach, Picker, Market, MyMarket] // add four scenes
}


const game = new Phaser.Game(config)
//center var and width and height
const {width, height} = game.config
const centerX = game.config.width / 2
const centerY = game.config.height / 2
//controls
let cursors = null
//var to track when you been to a scene
this.vibeach = false
this.vimar = false
this.vimy = false