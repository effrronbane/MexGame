class Credit extends Phaser.Scene {
    constructor() {
        super('creditScene')
    }

    create() {
        //back drop
        this.add.image(centerX,centerY, 'border')
        
        //credits
        this.add.bitmapText(centerX, centerY-80, 'May_font', 'Creditos', 60).setOrigin(.5)
        this.add.bitmapText(centerX, centerY-32, 'May_font', 'Programacion-Gustavo', 35).setOrigin(.5)
        this.add.bitmapText(centerX, centerY+15, 'May_font', 'Escritor-Gustavo', 35).setOrigin(.5)

        //how to go back
        this.add.bitmapText(centerX, centerY+75, 'May_font', 'Pulsa C para volver', 32).setOrigin(0.5)
        
        //controls
        cr = this.input.keyboard.addKey('C')
    }

    update() {
        //checks for inputs
        if(Phaser.Input.Keyboard.JustDown(cr)){
            this.scene.start('startScene')
        }
    }
}