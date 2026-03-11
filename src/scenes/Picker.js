class Picker extends Phaser.Scene {
    constructor() {
        super('pickerScene')
    }

    create() {
        const playa = this.add.bitmapText(centerX-185, centerY+64, 'May_font', 'La Playa', 45).setOrigin(.5)
        const mercado = this.add.bitmapText(centerX+200, centerY-58, 'May_font', 'El Mercado', 45).setOrigin(.5)
        const puesto = this.add.bitmapText(centerX-185, centerY-64, 'May_font', 'Nuestro Puesto', 45).setOrigin(.5)
        //const som = this.add.bitmapText(centerX+200, centerY+64, 'May_font', 'Beach', 45).setOrigin(.5)

        playa.setInteractive()
        mercado.setInteractive()
        puesto.setInteractive()
        //som.setInteractive()
        playa.on('pointerdown', () => {
            this.scene.start("beachScene")
        })
        mercado.on('pointerdown', () => {
            this.scene.start("marketScene")
        })
        puesto.on('pointerdown', () => {
            this.scene.start("mymarketScene")
        })
        //som.on('pointerdown', () => {
          //  this.scene.start("neutralScene")
        //})
    }
}