controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player2,
    assets.animation`PLAYER1`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player2,
    assets.animation`myAnim`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player2,
    assets.animation`myAnim9`,
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player2,
    assets.animation`myAnim1`,
    200,
    true
    )
})
info.onLifeZero(function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    player2.startEffect(effects.disintegrate)
    enemy1.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
let player2: Sprite = null
let enemy1: Sprite = null
info.setLife(3)
enemy1.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
tiles.setCurrentTilemap(tilemap`level`)
player2 = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(player2)
forever(function () {
    scene.cameraFollowSprite(player2)
})
forever(function () {
    enemy1 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
    enemy1.follow(player2)
})
forever(function () {
    pause(5000)
})
game.onUpdateInterval(500, function () {
    enemy1 += 1
})
