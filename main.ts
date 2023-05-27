pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
/**
 * For Some Reason, Had to Map 0-5 on x, and 0-6 on Y???
 */
basic.forever(function () {
    basic.clearScreen()
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    led.plotBrightness(pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    5
    ), pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    0,
    6
    ), 255)
})
