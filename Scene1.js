
class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }

    preload()
    {
        this.load.image("background", "./assets/space_shooter_pack/Graphics/backgrounds/desert-background.png");

        this.load.image("ship1", "./assets/space_shooter_pack/Graphics/spritesheets/enemy-small.png");
        this.load.image("ship2", "./assets/space_shooter_pack/Graphics/spritesheets/enemy-medium.png");
        this.load.image("ship3", "./assets/space_shooter_pack/Graphics/spritesheets/enemy-big.png");
    }

    create()
    {
        this.add.text(20,20, "Loading game....");
        this.scene.start("playGame");
    }
}


