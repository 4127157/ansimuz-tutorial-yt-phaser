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

        this.load.spritesheet("power-up", "./assets/space_shooter_pack/Graphics/spritesheets/power-up.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.spritesheet("player", "./assets/space_shooter_pack/Graphics/spritesheets/ship.png", {
            frameWidth: 16,
            frameHeight: 24
        });

        this.load.spritesheet("beam", "./assets/space_shooter_pack/Graphics/spritesheets/laser-bolts.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.bitmapFont("pixelFont", "./assets/space_shooter_pack/font/font.png", "./assets/space_shooter_pack/font/font.xml");

        this.load.audio("audio_beam", ["./assets/space_shooter_pack/sounds/beam.ogg", "./assets/space_shooter_pack/sounds/beam.mp3"]);
        this.load.audio("audio_explosion", ["./assets/space_shooter_pack/sounds/explosion.ogg", "./assets/space_shooter_pack/sounds/explosion.mp3"]);
        this.load.audio("audio_pickup", ["./assets/space_shooter_pack/sounds/pickup.ogg", "./assets/space_shooter_pack/sounds/pickup.mp3"]);
        this.load.audio("music", ["./assets/space_shooter_pack/sounds/sci-fi_platformer12.ogg", "./assets/space_shooter_pack/sounds/sci-fi_platformer12.mp3"]);
    }

    create()
    {
        this.add.text(20,20, "Loading game....");
        this.scene.start("playGame");

        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship1"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "explo_anim",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });

        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("power-up", {
                start:0,
                end: 1
            }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers("power-up", {
                start:2,
                end: 3
            }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: "thrust",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "beam_anim",
            frames: this.anims.generateFrameNumbers("beam", {
                start: 2,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        });
    }
}


