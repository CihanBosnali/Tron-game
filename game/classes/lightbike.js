export class Lightbike {
    constructor() {
        this.id = 0;
        this.pos = {};
        this.pos.x = 10;
        this.pos.y = 10;

        this.light = {};
        this.light.points = [];
        this.light.lenght = 1;
        this.light.color = "yellow";
    }

    init(player_id) {
        this.id = player_id;
        this.pos.x *= player_id;
        this.pos.x += 1;
        if (player_id == 1){
            this.light.color = "green";
        }

    }
}