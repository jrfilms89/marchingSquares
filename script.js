let field = [];
let rez = 40;
let cols, rows;

function setup(){
    createCanvas(600, 400);
    cols = 1 + width / rez;
    rows = 1 + height / rez;
    field = [
        [cols, rows]
    ];
    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
            field[[i, j]] = Math.floor(Math.random() * 2);
        }
    }
    console.log(field);
}

const line = (v1, v2) =>{
    line(v1.x, v1.y, v2.x, v2.y);
}

function draw(){
    background(120);
    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
            stroke(field[[i, j]]*255);
            strokeWeight(rez* .4);
            point(i*rez, j*rez);
        }
    }
    for (let i = 0; i < cols - 1; i++){
        for (let j = 0; j < rows - 1; j++){
            let x = i * rez;
            let y = j * rez;
            let a = new p5.Vector(x + rez*0.5, y);
            let b = new p5.Vector(x + rez    , y + rez*0.5);
            let c = new p5.Vector(x + rez*0.5, y + rez);
            let d = new p5.Vector(x          , y + rez*0.5);
            let state = getState(field[[i,j]], field[[i + 1,j]], field[[i + 1 ,j + 1]], field[[i,j + 1]]);
            stroke(255);
            strokeWeight(1);
            switch (state){
                case 1:
                    line(a, b);
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 8:
                    break;
                case 9:
                    break;
                case 10:
                    break;
                case 11:
                    break;
                case 12:
                    break;
                case 13:
                    break;
                case 14:
                    break;
                case 15:
                    break;
            }
        }
    }
    
}

const getState = ( a, b, c, d) =>{
    return a* 8 + b * 4 + c * 2 + d * 1;
}