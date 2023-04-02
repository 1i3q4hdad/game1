//Canvas
let canvas = document.createElement("canvas");
        canvas.width = 800;
        canvas.height = 600;
let c = canvas.getContext("2d");
canvas.setAttribute("class", "canvas");
document.body.appendChild(canvas);

window.addEventListener('load', mainLoop,);
window.addEventListener('keydown', mvm)
window.addEventListener('keydown', shooting)
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

//Enemy units
let sUnits = [];
for (i = 0; i<20; i++){
    let Enemy = new Sunit(i, 11 + i*50, 100, 25, 25, "black");
    sUnits.push(Enemy);
}

//movement 

function mvm(e) {
    
    if(e.keyCode == 37) {
        p1.x -= 10;
    }
    if(e.keyCode == 39 ){
        p1.x += 10;
    }
}
let p1 = new Player(canvas.width/2, 500, 50, 30, "blue");


function mainLoop(){
    c.clearRect(0, 0, 800, 600);
    for (i = 0; i < 20; i++){
        sUnits[i].drawSu();
    };
    
        p1.drawPlayer()

        if(bullets.length > 0){
            bullets[0].drawBullet()
            bullets[0].y -= 10;

            if(bullets.length >0 ) {
                if(bullets[0].y <= 10) {

                    bullets.pop();
// poping enemies
                }
            }

        }
window.requestAnimationFrame(mainLoop);
}
window.requestAnimationFrame(mainLoop);

let bullets = [];

function shooting(e) {
    if(e.keyCode == 65 && bullets.length <1){
        let b1 = new Bullet (p1.x, p1.y, 10, 10, "yellow")
        bullets.push(b1)
    }
}



