export class Lightbike {
    constructor() {
        this.pos = {};
        this.pos.x = 10;
        this.pos.y = 10;

        this.light = {};
        this.light.points = [];
        this.light.lenght = 1;
        this.light.color = "yellow";
    };

    init(player_id) {
        this.pos.x *= player_id;
        this.pos.x += 1;

    };
}