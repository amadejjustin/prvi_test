input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . # # #
        # . # . #
        . # # # #
        # # . # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showString("f")
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
})
