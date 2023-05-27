def on_forever():
    if pins.analog_read_pin(AnalogPin.P0) < 150:
        basic.show_arrow(ArrowNames.WEST)
    elif pins.analog_read_pin(AnalogPin.P0) > 350:
        basic.show_arrow(ArrowNames.EAST)
    elif pins.analog_read_pin(AnalogPin.P1) < 150:
        basic.show_arrow(ArrowNames.NORTH)
    elif pins.analog_read_pin(AnalogPin.P1) > 350:
        basic.show_arrow(ArrowNames.SOUTH)
    else:
        basic.clear_screen()
basic.forever(on_forever)
