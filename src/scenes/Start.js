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
        this.load.image('post', 'img/postcard.png')

        //font
        this.load.bitmapFont('May_font', 'font/Mayan.png', 'font/Mayan.xml')
    }

    create() {
        this.add.image(centerX,centerY,'post')
        this.add.bitmapText(centerX-185, centerY-32, 'May_font', 'Acapulco', 60).setOrigin(.5)
        this.add.bitmapText(centerX+150, centerY-32, 'May_font', 'Recuerdos de Mexico', 34).setOrigin(0.5)
        this.clstart = this.add.bitmapText(centerX+150, centerY + 24, 'May_font', 'Espacio Para Empezar', 30).setOrigin(0.5)
        cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        this.scene.start('mymarketScene')
        if(Phaser.Input.Keyboard.JustDown(cursors.space)) {
            this.scene.start('neutralScene')
        }
    }
}