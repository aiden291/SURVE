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
info.onCountdownEnd(function () {
    info.changeLifeBy(5)
    info.startCountdown(20)
    tiles.setCurrentTilemap(tilemap`level0`)
})
info.onScore(100, function () {
    info.changeLifeBy(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player2,
    assets.animation`myAnim9`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    myEnemy.setPosition(randint(0, scene.screenHeight()), randint(0, scene.screenWidth()))
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
    game.gameOver(false)
})
info.onScore(50, function () {
    info.changeLifeBy(1)
})
let player2: Sprite = null
let myEnemy: Sprite = null
info.startCountdown(20)
info.setScore(0)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level`)
myEnemy = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
myEnemy.setPosition(randint(0, scene.screenHeight()), randint(0, scene.screenWidth()))
player2 = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(player2, 100, 100)
forever(function () {
    scene.cameraFollowSprite(player2)
    myEnemy.follow(player2, info.score() / 10)
})
forever(function () {
    pause(100)
    info.changeScoreBy(1)
})
