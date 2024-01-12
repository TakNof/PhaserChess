const canvasSize = {width: 1200, height: 1200};

let config = {
    type: Phaser.AUTO,
    physics:{
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    width: canvasSize.width,
    height: canvasSize.height,
    scene: [Game]
}

const colors = {
    limeGreen: "0x00ff00",
    DarkGreen : "0x004200",
    black: "0x000000",
    crimsonRed: "0xDC143C",
    sapphireBlue: "0x0F52BA"
};


const game = new Phaser.Game(config);