class MyMarket extends Phaser.Scene {
    constructor() {
        super('mymarketScene')
    }

    init() {
        //font, and boxes x and y
        this.Xbox = 0
        this.Ybox = 400
        this.box_font = 'May_font'

        //x and y for text to appear, size, and max char
        this.textY = 420
        this.textX = 25
        this.textSi = 23
        this.textMax = 715

        //where the next text will appear
        this.nextTE = '[Espacio]'
        this.nextTE_X = 775
        this.nextTE_Y = 574

        //how fast words will be displayed
        this.timer = 13

        //dialog var
        this.dialogConvo = 3
        this.dialogLine = 1	  
        this.dialogSpeaker = null		
        this.dialogLastSpeaker = null	
        this.dialogTyping = false		
        this.diatext = null			
        this.next = null

        //char time to tween
        this.tweenDur = 500
        this.offX = -500
        this.offY = 1000
    }

    create() {
        //marks you been here
        vimy = true
        
        //background
        this.add.image(0,0,'MYmarket').setOrigin(0).setDisplaySize(width, height)
        
        //dialog
        this.dialog = this.cache.json.get('dialog')

        //char sprite
        this.Gustavo = this.add.sprite(this.offX, this.Ybox-100, 'Gustavo').setScale(.25)
        this.Gustavo.speakerXOffset = 100

        //box for dialog
        this.diabox = this.add.sprite(this.Xbox, this.Ybox, 'box').setOrigin(0)

        //init dialog text objects
        this.diatext = this.add.bitmapText(this.textX, this.textY, this.box_font, '', this.textSi)
        this.next = this.add.bitmapText(this.nextTE_X, this.nextTE_Y, this.box_font, '', this.textSi)

        //input
        cursors = this.input.keyboard.createCursorKeys()
        
        //starts the dialog
        this.typeText()
    }

    update() {
        //checks input
        if(Phaser.Input.Keyboard.JustDown(cursors.space) && !this.dialogTyping) {
            this.typeText()
        }
    }

    typeText() {
        //says its typing
        this.dialogTyping = true
        this.diatext.text = ''
        this.next.text = ''
        
        //increment count 
        if(this.dialogLine > this.dialog[this.dialogConvo].length - 1) {
            this.dialogLine = 0
            this.dialogConvo++
        }

        //make the line var to change when to change scene
        let line = this.dialog[this.dialogConvo][this.dialogLine]
        if(line.changeScene){
        if(this.dialogLastSpeaker) {
            this.tweens.add({
                    targets: this[this.dialogLastSpeaker],
                    x: this.offX,
                    duration: this.tweenDuration,
                    ease: 'Linear',
                    onComplete: () => {
                        //going to scene picker
                        this.scene.start('pickerScene')
                    }
                })
            }
        return
        }
            this.dialogSpeaker = this.dialog[this.dialogConvo][this.dialogLine]['speaker']
            
            // check if there's a new speaker (for exit/enter animations)
            if(this.dialog[this.dialogConvo][this.dialogLine]['newSpeaker']) {
                // tween out prior speaker's image
                if(this.dialogLastSpeaker) {
                    this.tweens.add({
                        targets: this[this.dialogLastSpeaker],
                        x: this.offX,
                        duration: this.tweenDuration,
                        ease: 'Linear'
                    })
                }
                // tween in new speaker's image
                this.tweens.add({
                    targets: this[this.dialogSpeaker],
                    x: this.Xbox + this[this.dialogSpeaker].speakerXOffset,
                    duration: this.tweenDuration,
                    ease: 'Linear'
                })
            }

            // build dialog (concatenate speaker + colon + line of text)
            this.combinedDialog = 
                this.dialog[this.dialogConvo][this.dialogLine]['speaker'].toUpperCase() 
                + ': ' 
                + this.dialog[this.dialogConvo][this.dialogLine]['dialog']

            // create a timer to iterate through each letter in the dialog text
            let currentChar = 0
            this.textTimer = this.time.addEvent({
                delay: this.timer,
                repeat: this.combinedDialog.length - 1,
                callback: () => { 
                    // concatenate next letter from dialogLines
                    this.diatext.text += this.combinedDialog[currentChar]
                    // advance character position
                    currentChar++
                    // check if timer has exhausted its repeats 
                    // (necessary since Phaser 3 no longer seems to have an onComplete event)
                    if(this.textTimer.getRepeatCount() == 0) {
                        // show prompt for more text
                        this.next = this.add.bitmapText(this.nextTE_X, this.nextTE_Y, this.box_font, this.nextTE, this.textSi).setOrigin(1)
                        this.dialogTyping = false   // un-lock input
                        this.textTimer.destroy()    // destroy timer
                    }
                },
                callbackScope: this // keep Scene context
            })
            
            //cleanup
            this.diatext.maxWidth = this.TEXT_MAX_WIDTH  //bounds
            this.dialogLine++                               // increment dialog line
            this.dialogLastSpeaker = this.dialogSpeaker     // set past speaker
    }
}