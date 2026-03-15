class Picker extends Phaser.Scene {
    constructor() {
        super('pickerScene')
    }

    create() {
        //back drop
        this.add.image(centerX,centerY, 'border')

        //text to select scene
        const playa = this.add.bitmapText(centerX-185, centerY+64, 'May_font', 'La Playa', 45).setOrigin(.5)
        const mercado = this.add.bitmapText(centerX+200, centerY-58, 'May_font', 'El Mercado', 45).setOrigin(.5)
        const puesto = this.add.bitmapText(centerX-160, centerY-58, 'May_font', 'Nuestro Puesto', 45).setOrigin(.5)
        
        //make sure you visited all the other scenes
        if(vimar && vibeach && vimy) {
            const los = this.add.bitmapText(centerX+200, centerY+64, 'May_font', 'Los Quiero', 45).setOrigin(.5)
            los.setInteractive()
            los.on('pointerdown', () => {
                this.cameras.main.fade(1000,0,0,0)
                this.cameras.main.once('camerafadeoutcomplete', () => {
                    this.scene.start('losScene')
                })
            })
        }

        //have you be able to click on the text to go to another scene
        playa.setInteractive()
        mercado.setInteractive()
        puesto.setInteractive()

        //checks for when you click on the text
        playa.on('pointerdown', () => {
            this.scene.start("beachScene")
        })
        mercado.on('pointerdown', () => {
            this.scene.start("marketScene")
        })
        puesto.on('pointerdown', () => {
            this.scene.start("mymarketScene")
        })
    }
}