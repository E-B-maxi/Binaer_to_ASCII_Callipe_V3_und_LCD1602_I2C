enum RadioMessage {
    message2 = 1435,
    message4 = 29926,
    message3 = 31126,
    message1 = 49434
}
function EntpackBinaerString() {
    if (binaerString.length >= 8) {
        let dezimalZahl = parseInt(binaerString, 2)
        // Wandelt die Dezimalzahl in das ASCII-Zeichen um
        asciiZeichen = String.fromCharCode(dezimalZahl)
        basic.showString(asciiZeichen, 150)
        // Setzt den String für die nächste Eingabe zurück
        binaerString = ""
        I2C_LCD1602.ShowString(asciiZeichen, hi, ho)
        hi + 1
        
        
        
        
        
        if (position_outputus == 32) {
           
            
            
            basic.showLeds(`
                # . # . #
                . . # . .
                . . # . .
                . . . . .
                # . # . #
                `)
        }
        position_outputus += 1
    } else {
        position_outputus = 1
         
        
        
        I2C_LCD1602.clear()
        basic.showLeds(`
            # . # . #
            . . # . .
            . . # . .
            . . . . .
            # . # . #
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
// Wenn Knopf A gedrückt wird, füge eine '0' hinzu
input.onButtonPressed(Button.A, function () {
    binaerString = "" + binaerString + "0"
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # # . . .
        `)
        
        
})
// Wenn A+B gedrückt wird, wandle die Binärkette in ASCII um
input.onButtonPressed(Button.AB, function () {
    radio.sendString(binaerString)
    EntpackBinaerString()
    asciiZeichen = ""
})
radio.onReceivedString(function (receivedString) {
    binaerString = receivedString
    EntpackBinaerString()
})
// Wenn Knopf B gedrückt wird, füge eine '1' hinzu
input.onButtonPressed(Button.B, function () {
        
    binaerString = "" + binaerString + "1"
    
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    . . . # #
    `)
    
       
})
let position_outputus = 0
let binaerString = ""
let asciiZeichen = ""
let hi = 0
let ho = 0
radio.setGroup(815)
position_outputus = 1
I2C_LCD1602.LcdInit(39)
basic.forever(function() {
    
    if (hi = 16) {
        
        hi = 0
        ho = 1

    }
})