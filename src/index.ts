import p5 from "p5";

import { Point, pointFn } from "./Point";

function sketch(p: p5) {
  let point: Point = {
    x: 100,
    y: 100,
  };
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.rect(point.x, point.y, 50, 50);
    point = pointFn(point);
  };

  p.mousePressed = () => {
    let fs = p.fullscreen();
    p.fullscreen(!fs);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
}

new p5(sketch);
