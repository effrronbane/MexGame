class Start extends Phaser.Scene {
    constructor() {
        super("startScene")
    }

    preload() {
        //load assets
        this.load.path = "./assets/"

        //dialog
        this.load.json('dialog', 'json/dialog.json')

        //backdrop for scenes
        this.load.image('mall', 'img/mall.png')
        this.load.image('beach', 'img/Rbeach.png')
        this.load.image('marketST', 'img/market.png')
        this.load.image('MYmarket', 'img/mymarket.png')
        this.load.image('box', 'img/box.png')
        this.load.image('Gustavo', 'img/Me.png')

        //font
        this.load.bitmapFont('May_font', 'font/Mayan.png', 'font/Mayan.xml')
    }

    create() {
        this.add.bitmapText(centerX, centerY-32, 'May_font', 'Recuerdos de Mexico', 40).setOrigin(0.5)
        const clstart = this.add.bitmapText(centerX, centerY + 24, 'May_font', 'Toca Para Empezar', 32).setOrigin(0.5)
        clstart.setInteractive()
        clstart.on('pointerdown', () => {
            this.scene.start("neutralScene")
        })
    }
}