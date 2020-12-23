let a = 0
let cacapipicrotte = 0
input.onButtonPressed(Button.A, function () {
    a = a - 1
    basic.showNumber(a)
})
input.onButtonPressed(Button.AB, function () {
    cacapipicrotte = randint(0, 10)
    basic.showNumber(cacapipicrotte)
    cacapipicrotte = 3 * cacapipicrotte
})
input.onButtonPressed(Button.B, function () {
    a = 1 + a
    basic.showNumber(a)
})
input.onGesture(Gesture.ScreenUp, function () {
    if (a == cacapipicrotte) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    cacapipicrotte = 0
    a = 0
})
