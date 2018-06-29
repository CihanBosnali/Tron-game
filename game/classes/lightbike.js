export class lightbike(player_id){
    constructor(){
        this.pos = {};
        this.pos.x = 10 * player_id;
        this.pos.y = 10 * player_id;

        this.light = {};
        this.light.points = [];
        this.light.lenght = 1;
    };

    init(){

    };
}