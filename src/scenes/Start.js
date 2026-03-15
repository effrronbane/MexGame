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
        this.load.image('border', 'img/bor_post.png')

        //font
        this.load.bitmapFont('May_font', 'font/Mayan.png', 'font/Mayan.xml')
    }

    create() {
        //back drop
        this.add.image(centerX,centerY,'post')

        //if you restart the var don't carry over
        vibeach = false
        vimar = false
        vimy = false
        
        //text on the screen
        this.add.bitmapText(centerX-185, centerY, 'May_font', 'Acapulco', 60).setOrigin(.5)
        this.add.bitmapText(centerX+150, centerY-32, 'May_font', 'Recuerdos de Mexico', 34).setOrigin(0.5)
        this.add.bitmapText(centerX+150, centerY+75, 'May_font', 'Pulsa C para los creditos', 24).setOrigin(0.5)
        this.add.bitmapText(centerX+150, centerY + 24, 'May_font', 'Espacio Para Empezar', 30).setOrigin(0.5)
        
        //controls to go to next scene or credits
        cursors = this.input.keyboard.createCursorKeys()
        cr = this.input.keyboard.addKey('C')
    }

    update() {
        //checking for inputs
        if(Phaser.Input.Keyboard.JustDown(cursors.space)) {
            this.scene.start('neutralScene')
        }
        if(Phaser.Input.Keyboard.JustDown(cr)){
            this.scene.start('creditScene')
        }
    }
}