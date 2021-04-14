input.onButtonPressed(Button.A, function () {
    let Va1 = 0
    ForeferKey = 1
    basic.clearScreen()
    for (let index = 0; index < Va1; index++) {
        basic.showString("" + (list[Junhan1]))
        basic.pause(100)
        basic.showString(",")
        Junhan1 += 1
    }
    basic.clearScreen()
    ForeferKey = 0
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.ringTone(988)
    Va2 = 1
    led.plot(Light, 3)
    basic.pause(300)
    if (input.logoIsPressed()) {
        Va2 = 2
        led.plot(Light, 2)
    }
    Light += 1
    music.rest(music.beat(BeatFraction.Sixteenth))
})
let Junhan1 = 0
let ForeferKey = 0
let list: number[] = []
let Va2 = 0
let Light = 0
Light = 0
Va2 = 0
list = [0]
for (let index = 0; index < 5; index++) {
    led.plot(Light, 4)
    Light += 1
}
Light = 0
basic.forever(function () {
    if (ForeferKey == 0) {
        led.unplot(Light, 4)
        basic.pause(500)
        led.plot(Light, 4)
        basic.pause(500)
        Light += 1
        if (Light == 5) {
            Light = 0
        }
    }
})
