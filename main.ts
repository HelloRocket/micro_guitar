input.onButtonPressed(Button.A, function () {
    Volume += -32
    music.setVolume(Volume)
})
input.onButtonPressed(Button.B, function () {
    Volume += 32
    music.setVolume(Volume)
})
let Volume = 0
basic.showIcon(IconNames.Rabbit)
Volume = 127
music.setVolume(Volume)
basic.forever(function () {
    music.setTempo(Math.map(Math.abs(1023 - input.acceleration(Dimension.X)), 0, 1023, 60, 320))
    music.play(music.tonePlayable(input.lightLevel() * 25, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
})
