export class Lightbike {
    constructor(player_id) {

        this.id = player_id;
        this.pos = {};
        this.pos.x = 10 * player_id;
        this.pos.y = 10;

        this.light = {};
        this.light.points = [];
        this.light.lenght = 1;
        this.light.color = "yellow";

        if (player_id == 1){
            this.light.color = "green";
    }

    init() {
        
        }
    }
}