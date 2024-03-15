datalogger.onLogFull(function () {
    logging = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C C5 - - - - - - ", 200), music.PlaybackMode.UntilDone)
    logging = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    logging = false
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
    datalogger.setColumnTitles("y")
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 C - - - - - - ", 200), music.PlaybackMode.UntilDone)
    logging = false
    basic.showIcon(IconNames.No)
})
let logging = false
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles("y")
loops.everyInterval(100, function () {
    if (logging) {
        datalogger.log(datalogger.createCV("y", input.acceleration(Dimension.Y)))
    }
})
