//Canvas
let canvas = document.createElement("canvas");
        canvas.width = 800;
        canvas.height = 600;
let c = canvas.getContext("2d");
canvas.setAttribute("class", "canvas");
document.body.appendChild(canvas);

window.addEventListener('load', mainLoop);
window.addEventListener('keydown', mvm)
window.addEventListener('keydown', shooting)

//ARRAYS
let sUnits = [];
let bullets = [];

//CLASSES
class Sunit {
    constructor(lp, x, y, w, h, c,){
        this.lp = lp;
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

class Player {
    constructor(x, y, w, h, c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }
    drawPlayer(){
        c.fillRect(this.x, this.y, this.w, this.h)
        c.fillStyle = this.c;
    }
}

class Bullet {
    constructor(x, y, w, h, c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }
    drawBullet(){
        c.fillRect(this.x, this.y, this.w, this.h)
        c.fillStyle = this.c
    }
}

// NEW CLASS MAKERS

for (i = 0; i<16; i++){
    let ex = 11 + i * 50
    let Enemy = new Sunit(i, ex, 100, 25, 25, "black");
    sUnits.push(Enemy); 
   
}

let p1 = new Player(canvas.width/2, 500, 50, 30, "blue");

function shooting(e) {
    if(e.keyCode == 65 && bullets.length <1){
        let b1 = new Bullet (p1.x, p1.y, 10, 10, "yellow")
        bullets.push(b1)
    }
}

//PLAYER MOVEMENT

function mvm(e) {
    
    if(e.keyCode == 37) {
        p1.x -= 10;
    }
    if(e.keyCode == 39 ){
        p1.x += 10;
    }
}

// DRAW FUNCTIONS

//enemies
function drawEnemie(){
    for (i = 0; i < sUnits.length; i++){
        sUnits[i].drawSu();
    };
}

//shot
function drawShot() {
    if(bullets.length > 0){
        bullets[0].drawBullet()
        bullets[0].y -= 10;

        if(bullets.length >0 ) {
            if(bullets[0].y <= 100) {
                bullets.pop();
                let as = sUnits.findIndex(unit => unit.lp === Math.floor((p1.x -11)/50))
                if (as !== -1){
                sUnits.splice(as, 1)
                console.log(as)}
            }
        }
    }
}

//MAINLOOP

function mainLoop(){
    c.clearRect(0, 0, 800, 600);

  drawEnemie()

    p1.drawPlayer()

        drawShot()

   
window.requestAnimationFrame(mainLoop);
}
window.requestAnimationFrame(mainLoop);


