//Canvas
let canvas = document.createElement("canvas");
        canvas.width = 800;
        canvas.height = 600;
let c = canvas.getContext("2d");
canvas.setAttribute("class", "canvas");
document.body.appendChild(canvas);

window.addEventListener('load', mainLoop);

class Sunit {
    constructor(x, y, w, h, c,){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }
    drawSu() {
        c.fillRect(this.x, this.y, this.w, this.h);
        c.fillStyle = this.c;
    }
}
//Enemy units
let sUnits = [];
for (i = 0; i<20; i++){
    let Enemy = new Sunit(100 + i*50, 100, 25, 25, "black");
    sUnits.push(Enemy);
}

//Player Unit
let playerX = canvas.width /2;  
const playerY = 500;
let playerH = 50;
let playerW = 50;

let Player = new Sunit(playerX, playerY, playerH, playerW, "blue");

function mainLoop(){
   
    c.clearRect(0, 0, 800, 600);
    for (i = 0; i < 20; i++){
        sUnits[i].drawSu();
    }
    Player.drawSu()
    window.requestAnimationFrame(mainLoop);
}

window.requestAnimationFrame(mainLoop);


