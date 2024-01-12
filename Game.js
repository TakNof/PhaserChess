class Game extends Phaser.Scene{
    constructor(){
        super({key: "Game"});

        this.pieceColors = ["Black", "White"];
        this.generalPieces = ["King", "Queen", "Bishop", "Knight", "Tower", "Pawn"];
    }

    preload(){
        for(let type of this.pieceColors){
            for(let piece of this.generalPieces){
                this.load.image(`${type}_${piece}`, `Assets/Pieces_Sprites/${type}/${piece}_Piece.png`, {frameWidth: canvasSize.width / 8, frameHeight: canvasSize.height / 8});
            }
        }
    }

    create(){
        this.grid = this.add.grid(0, 0, canvasSize.width*2, canvasSize.height*2, canvasSize.width/8, canvasSize.height/8, colors.limeGreen).setAltFillStyle(colors.DarkGreen).setOutlineStyle();
        
        this.board = new Board(canvasSize);

        this.blackPieces = new Array();
        this.whitePieces = new Array();

        for(let type of  this.pieceColors){
            for(let piece of this.generalPieces){
                let iterations = 1;
                if(piece !== "King" && piece !== "Queen"){
                    if(piece === "Pawn"){
                        iterations = 8;
                    }else{
                        iterations = 2;
                    }
                }

                let bottom = 0;
                if(type === "White"){
                    bottom = 7;
                }

                let positions;
                switch(piece){
                    case "King":
                        positions = [{x: 4, y: 0 + bottom}];
                    break;

                    case "Queen":
                        positions = [{x: 3, y: 0 + bottom}];
                    break;

                    case "Bishop":
                        positions = [{x: 2, y: 0 + bottom}, {x: 5, y: 0 + bottom}];
                    break;

                    case "Knight":
                        positions = [{x: 1, y: 0 + bottom}, {x: 6, y: 0 + bottom}];
                    break;

                    case "Tower":
                        positions = [{x: 0, y: 0 + bottom}, {x: 7, y: 0 + bottom}];
                    break;

                    case "Pawn":
                        positions = [{x: 0, y: Math.abs(bottom - 1)}, {x: 1, y: Math.abs(bottom - 1)}, {x: 2, y: Math.abs(bottom - 1)}, {x: 3, y: Math.abs(bottom - 1)}, {x: 4, y: Math.abs(bottom - 1)}, {x: 5, y: Math.abs(bottom - 1)}, {x: 6, y: Math.abs(bottom - 1)}, {x: 7, y: Math.abs(bottom - 1)}];
                    break;
                }

                for(let i = 0; i < iterations; i++){
                    this[`${type.toLowerCase()}Pieces`].push(new Piece(this, this.board.gridPosToCoord(positions[i]), `${type}_${piece}`));
                }
            }
        }

        console.log(this.board.grid);
        
    }

    update(){
        // this.callAll(this.blackPieces, "update");
        // this.callAll(this.whitePieces, "update");
    }

    /**
     * Custom method to call the same method to all children in the group.
     * @param {Array} array The array of elements to call the method.
     * @param {String} methodName the name of the method to call.
     * @param  {...any} args the arguments to pass to the method.
     */
    callAll(array, methodName, ...args) {
        array.forEach(function (enemy) {
            if(args === null){
                enemy[methodName]();
            }else{
                enemy[methodName](...args);
            }
        });
    };
}