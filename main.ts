function display_labels () {
    if (B_labels) {
        Label_sides.say("Sides ")
        Label_radius.say("Radius ")
        Label_angle.say("Angle")
    } else {
        Label_sides.say("")
        Label_radius.say("")
        Label_angle.say("")
    }
}
function calc_polygon_vertices (Sides: number, Radius: number, Starting_angle_degrees: number, Origin_X: number, Origin_Y: number) {
    X = []
    Y = []
    Step_degrees = 360 / Sides
    Angle_degrees = Starting_angle_degrees
    while (Angle_degrees < Starting_angle_degrees + 360) {
        degrees_to_XY(Angle_degrees, Radius, Origin_X, Origin_Y)
        X.push(Point_X)
        Y.push(Point_y)
        Angle_degrees += Step_degrees
    }
}
function slider_up () {
    if (B_left_slider) {
        if (Slider_r < 50) {
            Slider_r = Slider_r + 1
            move_curser_r()
            draw_polygon()
        }
    } else {
        if (Slider_A < 90) {
            Slider_A = Slider_A + 1
            move_curser_A()
            draw_polygon()
        }
    }
}
function degrees_to_XY (Angle_degrees: number, Radius: number, Origin_X: number, Origin_Y: number) {
    Angle_radians = Angle_degrees * Pi / 180
    Point_X = Origin_X + Radius * Math.cos(Angle_radians)
    Point_y = Origin_Y + Radius * Math.sin(0 - Angle_radians)
}
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    slide_right()
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    slider_down()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    slide_left()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    slider_down()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    B_left_slider = !(B_left_slider)
})
function slider_down () {
    if (B_left_slider) {
        if (Slider_r > 8) {
            Slider_r = Slider_r - 1
            move_curser_r()
            draw_polygon()
        }
    } else {
        if (Slider_A > 0) {
            Slider_A = Slider_A - 1
            move_curser_A()
            draw_polygon()
        }
    }
}
function slide_left () {
    if (Slider > 3) {
        Slider = Slider - 1
        move_curser()
        draw_polygon()
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    B_labels = !(B_labels)
    display_labels()
})
function move_curser_A () {
    Curser_A_S.bottom = Slider_A_S.bottom - (0 + Slider_A)
    Curser_A_S.say("" + Slider_A)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    slide_right()
})
function init_starting_angles () {
    Sa = [0, 1, 2, 90, 45, 18, 0, 90, 90, 9, 0, 23, 13, 6, 0, 18, 0, 3, 0, 11, 10, 4, 1, 2, 10, 2, 4, 9, 9, 12, 5]
}
function make_r_slider () {
    Slider_r_I = image.create(8, 85)
    Slider_r_I.fill(7)
    Slider_r_S = sprites.create(Slider_r_I, SpriteKind.Player)
    Slider_r_S.left = 2
    Curser_r_I = image.create(8, 2)
    Curser_r_I.fill(2)
    Curser_r_S = sprites.create(Curser_r_I, SpriteKind.Player)
    Curser_r_S.left = 2
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    slider_up()
})
function make_slider () {
    Slider_I = image.create(82, 8)
    Slider_I.fill(7)
    Slider_S = sprites.create(Slider_I, SpriteKind.Player)
    Slider_S.bottom = scene.screenHeight() - 2
    Curser_I = image.create(3, 8)
    Curser_I.fill(2)
    Curser_S = sprites.create(Curser_I, SpriteKind.Player)
    Curser_S.bottom = scene.screenHeight() - 2
}
function make_canvas () {
    Canvas_I = image.create(scene.screenWidth(), scene.screenHeight())
    Canvas_I.fill(15)
    Canvas = sprites.create(Canvas_I, SpriteKind.Player)
}
function move_curser_r () {
    Curser_r_S.bottom = Slider_r_S.bottom - (-16 + 2 * Slider_r)
    Curser_r_S.say("" + Slider_r)
}
function slide_right () {
    if (Slider < 30) {
        Slider = Slider + 1
        move_curser()
        draw_polygon()
    }
}
function move_curser () {
    Curser_S.left = Slider_S.left + (-9 + 3 * Slider)
    Curser_S.say("" + Slider)
    if (Slider < Sa.length) {
        Slider_A = Sa[Slider]
    } else {
        Slider_A = 0
    }
    move_curser_A()
}
function make_output_sprites () {
    Out1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Out2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Out3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Out2.y = Out1.y + 12
    Out3.y = Out2.y + 12
    Label_sides = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Label_radius = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Label_angle = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Label_sides.setPosition(10, scene.screenHeight() - 8)
    Label_radius.setPosition(40, 8)
    Label_angle.setPosition(scene.screenWidth() - 34, 8)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    slider_up()
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    slide_left()
})
function draw_polygon () {
    Canvas_I.fill(15)
    Canvas_I.setPixel(CenterX, CenterY, 5)
    N_sides = Slider
    Radius = Slider_r
    Degrees_per_side = 360 / N_sides
    calc_polygon_vertices(N_sides, Radius, Slider_A, CenterX, CenterY)
    for (let index2 = 0; index2 <= N_sides - 2; index2++) {
        Canvas_I.drawLine(X[index2], Y[index2], X[index2 + 1], Y[index2 + 1], 6)
    }
    Canvas_I.drawLine(X[N_sides - 1], Y[N_sides - 1], X[0], Y[0], 6)
}
function make_A_slider () {
    Slider_A_I = image.create(8, 91)
    Slider_A_I.fill(7)
    Slider_A_S = sprites.create(Slider_A_I, SpriteKind.Player)
    Slider_A_S.right = scene.screenWidth() - 2
    Curser_A_I = image.create(8, 1)
    Curser_A_I.fill(2)
    Curser_A_S = sprites.create(Curser_A_I, SpriteKind.Player)
    Curser_A_S.right = Slider_A_S.right
}
let Curser_A_I: Image = null
let Slider_A_I: Image = null
let Degrees_per_side = 0
let Out3: Sprite = null
let Out2: Sprite = null
let Out1: Sprite = null
let Canvas: Sprite = null
let Canvas_I: Image = null
let Curser_S: Sprite = null
let Curser_I: Image = null
let Slider_S: Sprite = null
let Slider_I: Image = null
let Curser_r_S: Sprite = null
let Curser_r_I: Image = null
let Slider_r_S: Sprite = null
let Slider_r_I: Image = null
let Sa: number[] = []
let Slider_A_S: Sprite = null
let Curser_A_S: Sprite = null
let Angle_radians = 0
let Slider_A = 0
let Point_y = 0
let Point_X = 0
let Angle_degrees = 0
let Step_degrees = 0
let Y: number[] = []
let X: number[] = []
let Label_angle: Sprite = null
let Label_radius: Sprite = null
let Label_sides: Sprite = null
let B_labels = false
let B_left_slider = false
let Slider_r = 0
let Radius = 0
let Slider = 0
let N_sides = 0
let CenterY = 0
let CenterX = 0
let Pi = 0
let M = 0
make_canvas()
make_slider()
make_r_slider()
make_A_slider()
init_starting_angles()
let S = "3.1415926535897932384626433832795"
Pi = parseFloat(S)
CenterX = Math.round(scene.screenWidth() / 2)
CenterY = Math.round(scene.screenHeight() / 2) - 4
N_sides = 3
Slider = N_sides
move_curser()
Radius = 35
Slider_r = Radius
move_curser_r()
B_left_slider = true
move_curser_A()
draw_polygon()
B_labels = true
make_output_sprites()
display_labels()
