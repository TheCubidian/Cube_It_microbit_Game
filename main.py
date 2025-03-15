def startScreenControls():
    global startScreen
    if input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B) or (input.button_is_pressed(Button.AB) or input.pin_is_pressed(TouchPin.P2)):
        startScreen = 1
    elif input.pin_is_pressed(TouchPin.P0):
        music.set_volume(music.volume() - 20)
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.IN_BACKGROUND)
        basic.pause(100)
    elif input.pin_is_pressed(TouchPin.P1):
        music.set_volume(music.volume() + 20)
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.IN_BACKGROUND)
        basic.pause(100)
yCounter = 0
xCounter = 0
win = 0
retry = 0
yPos = 0
xPos = 0
ledsOn = 0
counter = 0
nextLevel = 0
restart = 0
startScreen = 0
levelNum = 1
pins.touch_set_mode(TouchTarget.P0, TouchTargetMode.RESISTIVE)
pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.RESISTIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.RESISTIVE)
pins.touch_set_mode(TouchTarget.LOGO, TouchTargetMode.RESISTIVE)

def on_forever():
    global restart
    if input.logo_is_pressed():
        restart = 1
basic.forever(on_forever)

# Start screen for the game, which is an animation of a creeper head going top-left to bottom-right.
# Also includes logic for if a button is pressed, remove the animation and start the game with the game logo.

def on_forever2():
    global nextLevel, counter, ledsOn, levelNum, xPos, yPos, retry, win, startScreen, restart, xCounter, yCounter
    nextLevel = 0
    counter = 0
    ledsOn = 0
    levelNum = 1
    xPos = 0
    yPos = 0
    retry = 0
    win = 0
    while startScreen == 0 or restart == 1:
        startScreen = 0
        restart = 0
        basic.show_leds("""
            # # . # #
            # # . # #
            . # # # .
            . # # # .
            . # . # .
            """)
        startScreenControls()
        basic.show_leds("""
            . . . . .
            . # # . #
            . # # . #
            . . # # #
            . . # # #
            """)
        startScreenControls()
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # # .
            . . # # .
            . . . # #
            """)
        startScreenControls()
        basic.show_leds("""
            . . . . #
            . . . . #
            . . . . .
            . . . # #
            . . . # #
            """)
        startScreenControls()
        basic.show_leds("""
            . . . # #
            . . . # #
            . . . # .
            . . . . .
            . . . . #
            """)
        startScreenControls()
        basic.show_leds("""
            . # # . .
            . . # # #
            . . # # #
            . . # . #
            . . . . .
            """)
        startScreenControls()
        if startScreen == 1:
            break
        basic.show_leds("""
            # # . # #
            # # . # #
            . # # # .
            . # # # .
            . # . # .
            """)
        startScreenControls()
        basic.show_leds("""
            . . . . .
            # . # # .
            # . # # .
            # # # . .
            # # # . .
            """)
        startScreenControls()
        basic.show_leds("""
            . . . . .
            . . . . .
            . # # . .
            . # # . .
            # # . . .
            """)
        startScreenControls()
        basic.show_leds("""
            # . . . .
            # . . . .
            . . . . .
            # # . . .
            # # . . .
            """)
        startScreenControls()
        basic.show_leds("""
            # # . . .
            # # . . .
            . # . . .
            . . . . .
            # . . . .
            """)
        startScreenControls()
        basic.show_leds("""
            # . # # .
            # # # . .
            # # # . .
            # . # . .
            . . . . .
            """)
        startScreenControls()
    basic.show_leds("""
        # # . # #
        # # . # #
        . # # # .
        . # # # .
        . # . # .
        """)
    music._play_default_background(music.built_in_playable_melody(Melodies.ENTERTAINER),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
    basic.pause(500)
    basic.show_string(" Cube It!")
    music.stop_all_sounds()
    while win != 1 and restart != 1:
        retry = 0
        basic.pause(50)
        basic.show_leds("""
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            """)
        basic.show_leds("""
            . # . # .
            # . # . .
            . # . # .
            # . # . .
            . # . # .
            """)
        basic.show_leds("""
            # . # . .
            . # . . .
            # . # . .
            . # . . .
            # . # . .
            """)
        if nextLevel == 1:
            nextLevel = 0
            levelNum += 1
        if levelNum == 1:
            xPos = 0
            yPos = 4
            basic.show_leds("""
                . # . . .
                # . . . #
                . # . . .
                # . . . .
                . # . . #
                """)
            basic.show_leds("""
                # . . . #
                . . . # #
                # . . . #
                . . . . #
                # . . # #
                """)
            basic.show_leds("""
                . . . # .
                . . # # .
                . . . # .
                . . . # .
                . . # # #
                """)
            basic.show_leds("""
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
                """)
            basic.show_leds("""
                . # . . .
                # # . . .
                . # . . .
                . # . . .
                # # # . .
                """)
            basic.show_leds("""
                # . . . #
                # . . . .
                # . . . #
                # . . . .
                # # . . #
                """)
            basic.show_leds("""
                . . . # .
                . . . . #
                . . . # .
                . . . . #
                # . . # .
                """)
        elif levelNum == 2:
            xPos = 4
            yPos = 4
            basic.show_leds("""
                . # . . .
                # . . . #
                . # . . .
                # . . . .
                . # . . #
                """)
            basic.show_leds("""
                # . . . #
                . . . # .
                # . . . .
                . . . . #
                # . . # #
                """)
            basic.show_leds("""
                . . . # #
                . . # . .
                . . . . #
                . . . # .
                . . # # #
                """)
            basic.show_leds("""
                . . # # .
                . # . . #
                . . . # .
                . . # . .
                . # # # #
                """)
            basic.show_leds("""
                . # # . .
                # . . # .
                . . # . .
                . # . . .
                # # # # .
                """)
            basic.show_leds("""
                # # . . .
                . . # . .
                . # . . .
                # . . . .
                # # # . .
                """)
            basic.show_leds("""
                # . . . #
                . # . . .
                # . . . #
                . . . . .
                # # . . #
                """)
            basic.show_leds("""
                . . . # .
                # . . . #
                . . . # .
                . . . . #
                # . . # .
                """)
        elif levelNum == 3:
            xPos = 0
            yPos = 0
            basic.show_leds("""
                . # . . #
                # . . . .
                . # . . .
                # . . . .
                . # . . #
                """)
            basic.show_leds("""
                # . . # #
                . . . . .
                # . . . #
                . . . . .
                # . . # #
                """)
            basic.show_leds("""
                . . # # #
                . . . . #
                . . . # #
                . . . . #
                . . # # #
                """)
            basic.show_leds("""
                . # # # .
                . . . # .
                . . # # .
                . . . # .
                . # # # .
                """)
            basic.show_leds("""
                # # # . .
                . . # . .
                . # # . .
                . . # . .
                # # # . .
                """)
            basic.show_leds("""
                # # . . #
                . # . . .
                # # . . #
                . # . . .
                # # . . #
                """)
            basic.show_leds("""
                # . . # .
                # . . . #
                # . . # .
                # . . . #
                # . . # .
                """)
        elif levelNum == 4:
            xPos = 0
            yPos = 4
            basic.show_leds("""
                . # . . #
                # . . . #
                . # . . #
                # . . . .
                . # . . .
                """)
            basic.show_leds("""
                # . . # .
                . . . # .
                # . . # #
                . . . . .
                # . . . .
                """)
            basic.show_leds("""
                . . # . #
                . . # . #
                . . # # #
                . . . . #
                . . . . #
                """)
            basic.show_leds("""
                . # . # .
                . # . # .
                . # # # #
                . . . # .
                . . . # .
                """)
            basic.show_leds("""
                # . # . .
                # . # . .
                # # # # .
                . . # . .
                . . # . .
                """)
            basic.show_leds("""
                . # . . .
                . # . . .
                # # # . .
                . # . . .
                . # . . .
                """)
            basic.show_leds("""
                # . . . #
                # . . . .
                # # . . #
                # . . . .
                # . . . #
                """)
            basic.show_leds("""
                . . . # .
                . . . . #
                # . . # .
                . . . . #
                . . . # .
                """)
        elif levelNum == 5:
            xPos = 2
            yPos = 2
            basic.show_leds("""
                . # . . #
                # . . . #
                . # . . #
                # . . . .
                . # . . #
                """)
            basic.show_leds("""
                # . . # #
                . . . # .
                # . . # #
                . . . . .
                # . . # #
                """)
            basic.show_leds("""
                . . # # #
                . . # . .
                . . # # #
                . . . . #
                . . # # .
                """)
            basic.show_leds("""
                . # # # .
                . # . . .
                . # # # .
                . . . # .
                . # # . .
                """)
            basic.show_leds("""
                # # # . .
                # . . . .
                # # # . .
                . . # . .
                # # . . .
                """)
            basic.show_leds("""
                # # . . #
                . . . . .
                # # . . #
                . # . . .
                # . . . #
                """)
            basic.show_leds("""
                # . . # .
                . . . . #
                # . . # .
                # . . . #
                . . . # .
                """)
        elif levelNum == 6:
            xPos = 2
            yPos = 2
            basic.show_leds("""
                . # . . #
                # . . . #
                . # . . #
                # . . . #
                . # . . #
                """)
            basic.show_leds("""
                # . . # #
                . . . # .
                # . . # #
                . . . # .
                # . . # #
                """)
            basic.show_leds("""
                . . # # #
                . . # . .
                . . # # #
                . . # . #
                . . # # .
                """)
            basic.show_leds("""
                . # # # .
                . # . . .
                . # # # .
                . # . # .
                . # # . .
                """)
            basic.show_leds("""
                # # # . .
                # . . . .
                # # # . .
                # . # . .
                # # . . .
                """)
            basic.show_leds("""
                # # . . #
                . . . . .
                # # . . #
                . # . . .
                # . . . #
                """)
            basic.show_leds("""
                # . . # .
                . . . . #
                # . . # .
                # . . . #
                . . . # .
                """)
        elif levelNum == 7:
            xPos = 2
            yPos = 3
            basic.show_leds("""
                . # . . #
                # . . . .
                . # . . .
                # . . . .
                . # . . .
                """)
            basic.show_leds("""
                # . . # #
                . . . . .
                # . . . .
                . . . . #
                # . . . #
                """)
            basic.show_leds("""
                . . # # #
                . . . . #
                . . . . #
                . . . # .
                . . . # .
                """)
            basic.show_leds("""
                . # # # .
                . . . # .
                . . . # .
                . . # . .
                . . # . .
                """)
            basic.show_leds("""
                # # # . .
                . . # . .
                . . # . .
                . # . . .
                . # . . .
                """)
            basic.show_leds("""
                # # . . #
                . # . . .
                . # . . #
                # . . . .
                # . . . #
                """)
            basic.show_leds("""
                # . . # .
                # . . . #
                # . . # .
                . . . . #
                . . . # .
                """)
        elif levelNum == 8:
            xPos = 2
            yPos = 4
            basic.show_leds("""
                . # . . #
                # . . . #
                . # . . .
                # . . . #
                . # . . #
                """)
            basic.show_leds("""
                # . . # #
                . . . # .
                # . . . #
                . . . # .
                # . . # #
                """)
            basic.show_leds("""
                . . # # #
                . . # . #
                . . . # .
                . . # . #
                . . # # #
                """)
            basic.show_leds("""
                . # # # .
                . # . # .
                . . # . .
                . # . # .
                . # # # .
                """)
            basic.show_leds("""
                # # # . .
                # . # . .
                . # . . .
                # . # . .
                # # # . .
                """)
            basic.show_leds("""
                # # . . #
                . # . . .
                # . . . #
                . # . . .
                # # . . #
                """)
            basic.show_leds("""
                # . . # .
                # . . . #
                . . . # .
                # . . . #
                # . . # .
                """)
        elif levelNum == 9:
            xPos = 4
            yPos = 0
            basic.show_leds("""
                . # . . #
                # . . . #
                . # . . #
                # . . . .
                . # . . #
                """)
            basic.show_leds("""
                # . . # #
                . . . # .
                # . . # #
                . . . . .
                # . . # #
                """)
            basic.show_leds("""
                . . # # #
                . . # . #
                . . # # #
                . . . . #
                . . # # .
                """)
            basic.show_leds("""
                . # # # .
                . # . # .
                . # # # .
                . . . # .
                . # # . .
                """)
            basic.show_leds("""
                # # # . .
                # . # . .
                # # # . .
                . . # . .
                # # . . .
                """)
            basic.show_leds("""
                # # . . #
                . # . . .
                # # . . #
                . # . . .
                # . . . #
                """)
            basic.show_leds("""
                # . . # .
                # . . . #
                # . . # .
                # . . . #
                . . . # .
                """)
        elif levelNum == 10:
            xPos = 2
            yPos = 2
            basic.show_leds("""
                . # . . .
                # . . . #
                . # . . .
                # . . . .
                . # . . #
                """)
            basic.show_leds("""
                # . . . #
                . . . # #
                # . . . #
                . . . . #
                # . . # #
                """)
            basic.show_leds("""
                . . . # .
                . . # # .
                . . . # .
                . . . # .
                . . # # #
                """)
            basic.show_leds("""
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
                """)
            basic.show_leds("""
                . # . . .
                # # . . #
                . # . . #
                . # . . #
                # # # . .
                """)
            basic.show_leds("""
                # . . . #
                # . . # .
                # . . # .
                # . . # .
                # # . . #
                """)
            basic.show_leds("""
                . . . # #
                . . # . .
                . . # . .
                . . # . .
                # . . # #
                """)
            basic.show_leds("""
                . . # # .
                . # . . #
                . # . . #
                . # . . #
                . . # # .
                """)
            basic.show_leds("""
                . # # . .
                # . . # .
                # . . # .
                # . . # .
                . # # . .
                """)
            basic.show_leds("""
                # # . . .
                . . # . .
                . . # . .
                . . # . .
                # # . . .
                """)
            basic.show_leds("""
                # . . . #
                . # . . .
                . # . . #
                . # . . .
                # . . . #
                """)
            basic.show_leds("""
                . . . # .
                # . . . #
                # . . # .
                # . . . #
                . . . # .
                """)
        basic.show_leds("""
            . . # . #
            . . . # .
            . . # . #
            . . . # .
            . . # . #
            """)
        basic.show_leds("""
            . # . # .
            . . # . #
            . # . # .
            . . # . #
            . # . # .
            """)
        basic.show_leds("""
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            """)
        basic.show_leds("""
            . # . # .
            # . # . .
            . # . # .
            # . # . .
            . # . # .
            """)
        basic.show_leds("""
            # . # . .
            . # . . .
            # . # . .
            . # . . .
            # . # . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            . # . . .
            # . . . .
            . # . . .
            """)
        basic.show_leds("""
            # . . . .
            . . . . .
            # . . . .
            . . . . .
            # . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        if restart == 1:
            break
        basic.pause(200)
        if levelNum == 1:
            led.plot(4, 0)
        elif levelNum == 2:
            basic.show_leds("""
                . . . # .
                . . . # .
                . # . # .
                . # . . .
                . # . . .
                """)
        elif levelNum == 3:
            basic.show_leds("""
                . . . . .
                . . . . #
                . . # . #
                . . . # #
                . # # # #
                """)
        elif levelNum == 4:
            basic.show_leds("""
                # # # . #
                # . # . #
                # . # . #
                # . # . #
                . . # # #
                """)
        elif levelNum == 5:
            basic.show_leds("""
                # . . . #
                . # . # .
                . . . . .
                . # . # .
                # . . . #
                """)
        elif levelNum == 6:
            basic.show_leds("""
                . # . # .
                # # . # #
                . . . . .
                # # . # #
                . # . # .
                """)
        elif levelNum == 7:
            basic.show_leds("""
                . # # # .
                # . # . #
                # . # . #
                . # . # .
                # . # . #
                """)
        elif levelNum == 8:
            basic.show_leds("""
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . # . # .
                """)
        elif levelNum == 9:
            basic.show_leds("""
                # . . . #
                # # . . #
                # . # . #
                # . . # #
                # . . . #
                """)
        elif levelNum == 10:
            basic.show_leds("""
                # # # # #
                # # . # #
                # . . . #
                # # . # #
                # # # # #
                """)
        basic.pause(2000)
        led.plot(xPos, yPos)
        while retry == 0:
            if input.button_is_pressed(Button.AB):
                retry = 1
            elif input.button_is_pressed(Button.A):
                if xPos > 0:
                    led.unplot(xPos, yPos)
                    xPos += -1
                    led.plot(xPos, yPos)
                    music.play(music.string_playable("E F G - - - - - ", 650),
                        music.PlaybackMode.IN_BACKGROUND)
                    basic.pause(300)
                    counter += 1
            elif input.button_is_pressed(Button.B):
                if xPos < 4:
                    led.unplot(xPos, yPos)
                    xPos += 1
                    led.plot(xPos, yPos)
                    music.play(music.string_playable("F G A - - - - - ", 650),
                        music.PlaybackMode.IN_BACKGROUND)
                    basic.pause(300)
                    counter += 1
            elif input.pin_is_pressed(TouchPin.P1):
                if yPos > 0:
                    led.unplot(xPos, yPos)
                    yPos += -1
                    led.plot(xPos, yPos)
                    music.play(music.string_playable("D E F - - - - - ", 650),
                        music.PlaybackMode.IN_BACKGROUND)
                    basic.pause(300)
                    counter += 1
            elif input.pin_is_pressed(TouchPin.P0):
                if yPos < 4:
                    led.unplot(xPos, yPos)
                    yPos += 1
                    led.plot(xPos, yPos)
                    music.play(music.string_playable("G A B - - - - - ", 650),
                        music.PlaybackMode.IN_BACKGROUND)
                    basic.pause(300)
                    counter += 1
            elif input.pin_is_pressed(TouchPin.P2) and levelNum != 10:
                retry = 1
                nextLevel = 1
            elif input.logo_is_pressed():
                restart = 1
            if restart == 1:
                break
            ledsOn = 0
            for index in range(5):
                for index2 in range(5):
                    if led.point(xCounter, yCounter):
                        ledsOn += 1
                    xCounter += 1
                yCounter += 1
                xCounter = 0
            xCounter = 0
            yCounter = 0
            if ledsOn == 1:
                basic.pause(500)
                for index3 in range(2):
                    basic.show_leds("""
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        """)
                    music._play_default_background(music.built_in_playable_melody(Melodies.BA_DING),
                        music.PlaybackMode.IN_BACKGROUND)
                    basic.show_leds("""
                        . . . . .
                        . # # # .
                        . # . # .
                        . # # # .
                        . . . . .
                        """)
                    basic.show_leds("""
                        . # # # .
                        # . . . #
                        # . . . #
                        # . . . #
                        . # # # .
                        """)
                    basic.pause(300)
                if levelNum == 10:
                    win = 1
                    retry = 1
                else:
                    levelNum += 1
                    retry = 1
    if win == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.pause(500)
        music.set_tempo(120)
        music._play_default_background(music.built_in_playable_melody(Melodies.NYAN),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        while True:
            basic.show_number(counter)
            basic.pause(500)
            for index4 in range(5):
                basic.show_leds("""
                    . . . . .
                    # . # . #
                    # # . # #
                    # . . . #
                    # # # # #
                    """)
                basic.show_leds("""
                    . . . . .
                    . # . # .
                    # . # . #
                    # . . . #
                    # # # # #
                    """)
            if restart == 1:
                basic.show_leds("""
                    . . . . .
                    # . # . #
                    # # . # #
                    # . . . #
                    # # # # #
                    """)
                music.stop_all_sounds()
                break
basic.forever(on_forever2)
