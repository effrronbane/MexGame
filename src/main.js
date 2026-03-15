//Name: Gustavo
//Game title: Recuerdos de Mexico
//Hours: 19
//Components: tween manager, text objects, bitmap font, fade in and out, and interactive text

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Start, Neutral, Beach, Picker, Market, MyMarket, Credit, Los] // add four scenes
}


const game = new Phaser.Game(config)

//center var and width and height
const {width, height} = game.config
const centerX = game.config.width / 2
const centerY = game.config.height / 2

//controls
let cursors = null
let cr = null
let re = null

//var to track when you been to a scene
let vibeach = false
let vimar = false
let vimy = false