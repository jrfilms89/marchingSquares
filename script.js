let field = [];
let rez = 10;
let cols, rows;

function setup() {
  createCanvas(600, 400);
  cols = 1 + width / rez;
  rows = 1 + height / rez;
  field = [[cols, rows]];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      field[[i, j]] = Math.floor(Math.random() * 2);
    }
  }
  //   console.log(field);
}

const drawLine = (v1, v2) => {
  line(v1.x, v1.y, v2.x, v2.y);
};

function draw() {
  background(120);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      stroke(field[[i, j]] * 255);
      strokeWeight(rez * 0.4);
      point(i * rez, j * rez);
    }
  }
  for (let i = 0; i < cols - 1; i++) {
    for (let j = 0; j < rows - 1; j++) {
      let x = i * rez;
      let y = j * rez;
      let a = createVector(x + rez * 0.5, y);
      let b = createVector(x + rez, y + rez * 0.5);
      let c = createVector(x + rez * 0.5, y + rez);
      let d = createVector(x, y + rez * 0.5);
      let state = getState(
        field[[i, j]],
        field[[i + 1, j]],
        field[[i + 1, j + 1]],
        field[[i, j + 1]]
      );
      stroke(255);
      strokeWeight(1);
      switch (state) {
        case 1:
          drawLine(c, d);
          break;
        case 2:
          drawLine(b, c);
          break;
        case 3:
          drawLine(b, d);
          break;
        case 4:
          drawLine(a, b);
          break;
        case 5:
          drawLine(a, d);
          drawLine(b, c);
          break;
        case 6:
          drawLine(a, c);
          break;
        case 7:
          drawLine(a, d);
          break;
        case 8:
          drawLine(a, d);
          break;
        case 9:
          drawLine(a, c);
          break;
        case 10:
          drawLine(a, b);
          drawLine(c, d);
          break;
        case 11:
          drawLine(a, b);
          break;
        case 12:
          drawLine(b, d);
          break;
        case 13:
          drawLine(b, c);
          break;
        case 14:
          drawLine(c, d);
          break;
        case 15:
          break;
      }
    }
  }
}

const getState = (a, b, c, d) => {
  let s = a * 8 + b * 4 + c * 2 + d * 1;
  return Math.round(s);
};
