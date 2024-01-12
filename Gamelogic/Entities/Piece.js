class Piece extends Phaser.Physics.Arcade.Sprite{
    /**
     * 
     * @param {Phaser.Scene} scene 
     * @param {{x: Number, y: Number}} originInfo 
     * @param {String} spriteImgStr 
     */
    constructor(scene, originInfo, spriteImgStr){
        super(scene, originInfo.x, originInfo.y, spriteImgStr);

        this.originInfo = originInfo;
        this.debug = false;
        scene.add.existing(this);

        this.setInteractive();

        this.gridPosition = this.scene.board.coordToGridPos(this);
        
        this.scene.board.setPieceInGrid(this);

        this.isSelected = false;

        this.on('pointerdown', (pointer) =>{
            if(pointer.leftButtonDown()){
                // this.isSelected = true;
                this.setTint(0xff0000);
            }
        });

        this.on('pointerout', function (pointer)
        {

            this.clearTint();

        });

        this.on('pointerup', function (pointer)
        {

            this.clearTint();

        });
    }

    update(){
        if(this.isSelected){
            this.setTint(0xff0000);
        }else{
            this.clearTint();
        }
    }
}