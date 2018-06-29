import { lightbike } from "./lightbike";

export class Game {
    constructor(){
        this.canvas = document.getElementById("gameCanvas");
        this.context = this.canvas.msGetInputContext("2d");

        this.player0 = lightbike(0);
        this.player1 = lightbike(1);
    }

    init(){

    }
}