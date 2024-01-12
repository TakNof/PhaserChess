class Board{
    constructor(size){
        this.size = size;
        this.grid = new Array(8).fill().map(() => new Array(8).fill(''));
        this.convertionScale = {x: this.size.width / 8, y: this.size.height / 8};
    }

    gridPosToCoord(gridPosition){
        return {x: gridPosition.x * this.convertionScale.x + this.convertionScale.x/2, y: gridPosition.y * this.convertionScale.y + this.convertionScale.y/2};
    }

    coordToGridPos(coordinates){
        return {x: (coordinates.x - this.convertionScale.x/2)/ this.convertionScale.x, y: (coordinates.y - this.convertionScale.y/2) / this.convertionScale.y}
    }

    /**
     * 
     * @param {Piece} piece 
     */
    setPieceInGrid(piece){
        this.grid[piece.gridPosition.y][piece.gridPosition.x] = piece.texture.key;
    }
}