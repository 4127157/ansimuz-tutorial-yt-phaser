
class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }

    preload()
    {
        this.load.image("background", "./assets/space_shooter_pack/Graphics/backgrounds/desert-background.png");

        this.load.spritesheet("ship1", "./assets/space_shooter_pack/Graphics/spritesheets/enemy-small.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ship2", "./assets/space_shooter_pack/Graphics/spritesheets/enemy-medium.png", {
            frameWidth: 32,
            frameHeight: 16
        });
        this.load.spritesheet("ship3", "./assets/space_shooter_pack/Graphics/spritesheets/enemy-big.png", {
            frameWidth: 32,
            frameHeight: 32
        });

        this.load.spritesheet("explosion", "./assets/space_shooter_pack/Graphics/spritesheets/explosion.png", {
            frameWidth: 16,
            frameHeight: 16
        });

    }

    create()
    {
        this.add.text(20,20, "Loading game....");
        this.scene.start("playGame");
    }
}


