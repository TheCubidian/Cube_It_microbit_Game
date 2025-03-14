function startScreenControls () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || (input.buttonIsPressed(Button.AB) || input.pinIsPressed(TouchPin.P2))) {
        startScreen = 1
    } else if (input.pinIsPressed(TouchPin.P0)) {
        music.setVolume(music.volume() - 20)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.pause(100)
        continue;
    } else if (input.pinIsPressed(TouchPin.P1)) {
        music.setVolume(music.volume() + 20)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.pause(100)
        continue;
    }
}
let yCounter = 0
let xCounter = 0
let win = 0
let retry = 0
let yPos = 0
let xPos = 0
let ledsOn = 0
let counter = 0
let nextLevel = 0
let restart = 0
let startScreen = 0
let levelNum = 1
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Resistive)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Resistive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Resistive)
pins.touchSetMode(TouchTarget.LOGO, TouchTargetMode.Resistive)
basic.forever(function () {
    if (input.logoIsPressed()) {
        restart = 1
    }
})
// Start screen for the game, which is an animation of a creeper head going top-left to bottom-right.
// Also includes logic for if a button is pressed, remove the animation and start the game with the game logo.
basic.forever(function () {
    nextLevel = 0
    counter = 0
    ledsOn = 0
    levelNum = 1
    xPos = 0
    yPos = 0
    retry = 0
    win = 0
    while (startScreen == 0 || restart == 1) {
        startScreen = 0
        restart = 0
        basic.showLeds(`
            # # . # #
            # # . # #
            . # # # .
            . # # # .
            . # . # .
            `)
        startScreenControls()
        basic.showLeds(`
            . . . . .
            . # # . #
            . # # . #
            . . # # #
            . . # # #
            `)
        startScreenControls()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # .
            . . # # .
            . . . # #
            `)
        startScreenControls()
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . .
            . . . # #
            . . . # #
            `)
        startScreenControls()
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # .
            . . . . .
            . . . . #
            `)
        startScreenControls()
        basic.showLeds(`
            . # # . .
            . . # # #
            . . # # #
            . . # . #
            . . . . .
            `)
        startScreenControls()
        if (startScreen == 1) {
            break;
        }
        basic.showLeds(`
            # # . # #
            # # . # #
            . # # # .
            . # # # .
            . # . # .
            `)
        startScreenControls()
        basic.showLeds(`
            . . . . .
            # . # # .
            # . # # .
            # # # . .
            # # # . .
            `)
        startScreenControls()
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # . .
            . # # . .
            # # . . .
            `)
        startScreenControls()
        basic.showLeds(`
            # . . . .
            # . . . .
            . . . . .
            # # . . .
            # # . . .
            `)
        startScreenControls()
        basic.showLeds(`
            # # . . .
            # # . . .
            . # . . .
            . . . . .
            # . . . .
            `)
        startScreenControls()
        basic.showLeds(`
            # . # # .
            # # # . .
            # # # . .
            # . # . .
            . . . . .
            `)
        startScreenControls()
    }
    basic.showLeds(`
        # # . # #
        # # . # #
        . # # # .
        . # # # .
        . # . # .
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.LoopingInBackground)
    basic.pause(500)
    basic.showString(" Cube It!")
    music.stopAllSounds()
    while (win != 1 && restart != 1) {
        retry = 0
        basic.pause(50)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . .
            . # . # .
            # . # . .
            . # . # .
            `)
        basic.showLeds(`
            # . # . .
            . # . . .
            # . # . .
            . # . . .
            # . # . .
            `)
        if (nextLevel == 1) {
            nextLevel = 0
            levelNum += 1
        }
        if (levelNum == 1) {
            xPos = 0
            yPos = 4
            basic.showLeds(`
                . # . . .
                # . . . #
                . # . . .
                # . . . .
                . # . . #
                `)
            basic.showLeds(`
                # . . . #
                . . . # #
                # . . . #
                . . . . #
                # . . # #
                `)
            basic.showLeds(`
                . . . # .
                . . # # .
                . . . # .
                . . . # .
                . . # # #
                `)
            basic.showLeds(`
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
                `)
            basic.showLeds(`
                . # . . .
                # # . . .
                . # . . .
                . # . . .
                # # # . .
                `)
            basic.showLeds(`
                # . . . #
                # . . . .
                # . . . #
                # . . . .
                # # . . #
                `)
            basic.showLeds(`
                . . . # .
                . . . . #
                . . . # .
                . . . . #
                # . . # .
                `)
        } else if (levelNum == 2) {
            xPos = 4
            yPos = 4
            basic.showLeds(`
                . # . . .
                # . . . #
                . # . . .
                # . . . .
                . # . . #
                `)
            basic.showLeds(`
                # . . . #
                . . . # .
                # . . . .
                . . . . #
                # . . # #
                `)
            basic.showLeds(`
                . . . # #
                . . # . .
                . . . . #
                . . . # .
                . . # # #
                `)
            basic.showLeds(`
                . . # # .
                . # . . #
                . . . # .
                . . # . .
                . # # # #
                `)
            basic.showLeds(`
                . # # . .
                # . . # .
                . . # . .
                . # . . .
                # # # # .
                `)
            basic.showLeds(`
                # # . . .
                . . # . .
                . # . . .
                # . . . .
                # # # . .
                `)
            basic.showLeds(`
                # . . . #
                . # . . .
                # . . . #
                . . . . .
                # # . . #
                `)
            basic.showLeds(`
                . . . # .
                # . . . #
                . . . # .
                . . . . #
                # . . # .
                `)
        } else if (levelNum == 3) {
            xPos = 0
            yPos = 0
            basic.showLeds(`
                . # . . #
                # . . . .
                . # . . .
                # . . . .
                . # . . #
                `)
            basic.showLeds(`
                # . . # #
                . . . . .
                # . . . #
                . . . . .
                # . . # #
                `)
            basic.showLeds(`
                . . # # #
                . . . . #
                . . . # #
                . . . . #
                . . # # #
                `)
            basic.showLeds(`
                . # # # .
                . . . # .
                . . # # .
                . . . # .
                . # # # .
                `)
            basic.showLeds(`
                # # # . .
                . . # . .
                . # # . .
                . . # . .
                # # # . .
                `)
            basic.showLeds(`
                # # . . #
                . # . . .
                # # . . #
                . # . . .
                # # . . #
                `)
            basic.showLeds(`
                # . . # .
                # . . . #
                # . . # .
                # . . . #
                # . . # .
                `)
        } else if (levelNum == 4) {
            xPos = 0
            yPos = 4
            basic.showLeds(`
                . # . . #
                # . . . #
                . # . . #
                # . . . .
                . # . . .
                `)
            basic.showLeds(`
                # . . # .
                . . . # .
                # . . # #
                . . . . .
                # . . . .
                `)
            basic.showLeds(`
                . . # . #
                . . # . #
                . . # # #
                . . . . #
                . . . . #
                `)
            basic.showLeds(`
                . # . # .
                . # . # .
                . # # # #
                . . . # .
                . . . # .
                `)
            basic.showLeds(`
                # . # . .
                # . # . .
                # # # # .
                . . # . .
                . . # . .
                `)
            basic.showLeds(`
                . # . . .
                . # . . .
                # # # . .
                . # . . .
                . # . . .
                `)
            basic.showLeds(`
                # . . . #
                # . . . .
                # # . . #
                # . . . .
                # . . . #
                `)
            basic.showLeds(`
                . . . # .
                . . . . #
                # . . # .
                . . . . #
                . . . # .
                `)
        } else if (levelNum == 5) {
            xPos = 2
            yPos = 2
            basic.showLeds(`
                . # . . #
                # . . . #
                . # . . #
                # . . . .
                . # . . #
                `)
            basic.showLeds(`
                # . . # #
                . . . # .
                # . . # #
                . . . . .
                # . . # #
                `)
            basic.showLeds(`
                . . # # #
                . . # . .
                . . # # #
                . . . . #
                . . # # .
                `)
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . . . # .
                . # # . .
                `)
            basic.showLeds(`
                # # # . .
                # . . . .
                # # # . .
                . . # . .
                # # . . .
                `)
            basic.showLeds(`
                # # . . #
                . . . . .
                # # . . #
                . # . . .
                # . . . #
                `)
            basic.showLeds(`
                # . . # .
                . . . . #
                # . . # .
                # . . . #
                . . . # .
                `)
        } else if (levelNum == 6) {
            xPos = 2
            yPos = 2
            basic.showLeds(`
                . # . . #
                # . . . #
                . # . . #
                # . . . #
                . # . . #
                `)
            basic.showLeds(`
                # . . # #
                . . . # .
                # . . # #
                . . . # .
                # . . # #
                `)
            basic.showLeds(`
                . . # # #
                . . # . .
                . . # # #
                . . # . #
                . . # # .
                `)
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . # . # .
                . # # . .
                `)
            basic.showLeds(`
                # # # . .
                # . . . .
                # # # . .
                # . # . .
                # # . . .
                `)
            basic.showLeds(`
                # # . . #
                . . . . .
                # # . . #
                . # . . .
                # . . . #
                `)
            basic.showLeds(`
                # . . # .
                . . . . #
                # . . # .
                # . . . #
                . . . # .
                `)
        } else if (levelNum == 7) {
            xPos = 2
            yPos = 3
            basic.showLeds(`
                . # . . #
                # . . . .
                . # . . .
                # . . . .
                . # . . .
                `)
            basic.showLeds(`
                # . . # #
                . . . . .
                # . . . .
                . . . . #
                # . . . #
                `)
            basic.showLeds(`
                . . # # #
                . . . . #
                . . . . #
                . . . # .
                . . . # .
                `)
            basic.showLeds(`
                . # # # .
                . . . # .
                . . . # .
                . . # . .
                . . # . .
                `)
            basic.showLeds(`
                # # # . .
                . . # . .
                . . # . .
                . # . . .
                . # . . .
                `)
            basic.showLeds(`
                # # . . #
                . # . . .
                . # . . #
                # . . . .
                # . . . #
                `)
            basic.showLeds(`
                # . . # .
                # . . . #
                # . . # .
                . . . . #
                . . . # .
                `)
        } else if (levelNum == 8) {
            xPos = 2
            yPos = 4
            basic.showLeds(`
                . # . . #
                # . . . #
                . # . . .
                # . . . #
                . # . . #
                `)
            basic.showLeds(`
                # . . # #
                . . . # .
                # . . . #
                . . . # .
                # . . # #
                `)
            basic.showLeds(`
                . . # # #
                . . # . #
                . . . # .
                . . # . #
                . . # # #
                `)
            basic.showLeds(`
                . # # # .
                . # . # .
                . . # . .
                . # . # .
                . # # # .
                `)
            basic.showLeds(`
                # # # . .
                # . # . .
                . # . . .
                # . # . .
                # # # . .
                `)
            basic.showLeds(`
                # # . . #
                . # . . .
                # . . . #
                . # . . .
                # # . . #
                `)
            basic.showLeds(`
                # . . # .
                # . . . #
                . . . # .
                # . . . #
                # . . # .
                `)
        } else if (levelNum == 9) {
            xPos = 4
            yPos = 0
            basic.showLeds(`
                . # . . #
                # . . . #
                . # . . #
                # . . . .
                . # . . #
                `)
            basic.showLeds(`
                # . . # #
                . . . # .
                # . . # #
                . . . . .
                # . . # #
                `)
            basic.showLeds(`
                . . # # #
                . . # . #
                . . # # #
                . . . . #
                . . # # .
                `)
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . . . # .
                . # # . .
                `)
            basic.showLeds(`
                # # # . .
                # . # . .
                # # # . .
                . . # . .
                # # . . .
                `)
            basic.showLeds(`
                # # . . #
                . # . . .
                # # . . #
                . # . . .
                # . . . #
                `)
            basic.showLeds(`
                # . . # .
                # . . . #
                # . . # .
                # . . . #
                . . . # .
                `)
        } else if (levelNum == 10) {
            xPos = 2
            yPos = 2
            basic.showLeds(`
                . # . . .
                # . . . #
                . # . . .
                # . . . .
                . # . . #
                `)
            basic.showLeds(`
                # . . . #
                . . . # #
                # . . . #
                . . . . #
                # . . # #
                `)
            basic.showLeds(`
                . . . # .
                . . # # .
                . . . # .
                . . . # .
                . . # # #
                `)
            basic.showLeds(`
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
                `)
            basic.showLeds(`
                . # . . .
                # # . . #
                . # . . #
                . # . . #
                # # # . .
                `)
            basic.showLeds(`
                # . . . #
                # . . # .
                # . . # .
                # . . # .
                # # . . #
                `)
            basic.showLeds(`
                . . . # #
                . . # . .
                . . # . .
                . . # . .
                # . . # #
                `)
            basic.showLeds(`
                . . # # .
                . # . . #
                . # . . #
                . # . . #
                . . # # .
                `)
            basic.showLeds(`
                . # # . .
                # . . # .
                # . . # .
                # . . # .
                . # # . .
                `)
            basic.showLeds(`
                # # . . .
                . . # . .
                . . # . .
                . . # . .
                # # . . .
                `)
            basic.showLeds(`
                # . . . #
                . # . . .
                . # . . #
                . # . . .
                # . . . #
                `)
            basic.showLeds(`
                . . . # .
                # . . . #
                # . . # .
                # . . . #
                . . . # .
                `)
        }
        basic.showLeds(`
            . . # . #
            . . . # .
            . . # . #
            . . . # .
            . . # . #
            `)
        basic.showLeds(`
            . # . # .
            . . # . #
            . # . # .
            . . # . #
            . # . # .
            `)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . .
            . # . # .
            # . # . .
            . # . # .
            `)
        basic.showLeds(`
            # . # . .
            . # . . .
            # . # . .
            . # . . .
            # . # . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            . # . . .
            # . . . .
            . # . . .
            `)
        basic.showLeds(`
            # . . . .
            . . . . .
            # . . . .
            . . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        if (restart == 1) {
            break;
        }
        basic.pause(200)
        if (levelNum == 1) {
            led.plot(4, 0)
        } else if (levelNum == 2) {
            basic.showLeds(`
                . . . # .
                . . . # .
                . # . # .
                . # . . .
                . # . . .
                `)
        } else if (levelNum == 3) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . # . #
                . . . # #
                . # # # #
                `)
        } else if (levelNum == 4) {
            basic.showLeds(`
                # # # . #
                # . # . #
                # . # . #
                # . # . #
                . . # # #
                `)
        } else if (levelNum == 5) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . . . .
                . # . # .
                # . . . #
                `)
        } else if (levelNum == 6) {
            basic.showLeds(`
                . # . # .
                # # . # #
                . . . . .
                # # . # #
                . # . # .
                `)
        } else if (levelNum == 7) {
            basic.showLeds(`
                . # # # .
                # . # . #
                # . # . #
                . # . # .
                # . # . #
                `)
        } else if (levelNum == 8) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . # . # .
                `)
        } else if (levelNum == 9) {
            basic.showLeds(`
                # . . . #
                # # . . #
                # . # . #
                # . . # #
                # . . . #
                `)
        } else if (levelNum == 10) {
            basic.showLeds(`
                # # # # #
                # # . # #
                # . . . #
                # # . # #
                # # # # #
                `)
        }
        basic.pause(2000)
        led.plot(xPos, yPos)
        while (retry == 0) {
            if (input.buttonIsPressed(Button.AB)) {
                retry = 1
            } else if (input.buttonIsPressed(Button.A)) {
                if (xPos > 0) {
                    led.unplot(xPos, yPos)
                    xPos += -1
                    led.plot(xPos, yPos)
                    music.play(music.stringPlayable("E F G - - - - - ", 650), music.PlaybackMode.InBackground)
                    basic.pause(300)
                    counter += 1
                }
            } else if (input.buttonIsPressed(Button.B)) {
                if (xPos < 4) {
                    led.unplot(xPos, yPos)
                    xPos += 1
                    led.plot(xPos, yPos)
                    music.play(music.stringPlayable("F G A - - - - - ", 650), music.PlaybackMode.InBackground)
                    basic.pause(300)
                    counter += 1
                }
            } else if (input.pinIsPressed(TouchPin.P1)) {
                if (yPos > 0) {
                    led.unplot(xPos, yPos)
                    yPos += -1
                    led.plot(xPos, yPos)
                    music.play(music.stringPlayable("D E F - - - - - ", 650), music.PlaybackMode.InBackground)
                    basic.pause(300)
                    counter += 1
                }
            } else if (input.pinIsPressed(TouchPin.P0)) {
                if (yPos < 4) {
                    led.unplot(xPos, yPos)
                    yPos += 1
                    led.plot(xPos, yPos)
                    music.play(music.stringPlayable("G A B - - - - - ", 650), music.PlaybackMode.InBackground)
                    basic.pause(300)
                    counter += 1
                }
            } else if (input.pinIsPressed(TouchPin.P2) && levelNum != 10) {
                retry = 1
                nextLevel = 1
            } else if (input.logoIsPressed()) {
                restart = 1
            }
            if (restart == 1) {
                break;
            }
            ledsOn = 0
            for (let index = 0; index < 5; index++) {
                for (let index = 0; index < 5; index++) {
                    if (led.point(xCounter, yCounter)) {
                        ledsOn += 1
                    }
                    xCounter += 1
                }
                yCounter += 1
                xCounter = 0
            }
            xCounter = 0
            yCounter = 0
            if (ledsOn == 1) {
                basic.pause(500)
                for (let index = 0; index < 2; index++) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        `)
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
                    basic.showLeds(`
                        . . . . .
                        . # # # .
                        . # . # .
                        . # # # .
                        . . . . .
                        `)
                    basic.showLeds(`
                        . # # # .
                        # . . . #
                        # . . . #
                        # . . . #
                        . # # # .
                        `)
                    basic.pause(300)
                }
                if (levelNum == 10) {
                    win = 1
                    retry = 1
                } else {
                    levelNum += 1
                    retry = 1
                }
            }
        }
    }
    if (win == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        music.setTempo(120)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.LoopingInBackground)
        while (true) {
            basic.showNumber(counter)
            basic.pause(500)
            for (let index = 0; index < 5; index++) {
                basic.showLeds(`
                    . . . . .
                    # . # . #
                    # # . # #
                    # . . . #
                    # # # # #
                    `)
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    # . # . #
                    # . . . #
                    # # # # #
                    `)
            }
            if (restart == 1) {
                basic.showLeds(`
                    . . . . .
                    # . # . #
                    # # . # #
                    # . . . #
                    # # # # #
                    `)
                music.stopAllSounds()
                break;
            }
        }
    }
})
