basic.forever(function () {
    music.play(music.createSoundExpression(WaveShape.Square, 1, 5000, 86, 255, 5000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
})
