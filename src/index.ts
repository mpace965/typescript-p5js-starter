import p5 from "p5";

import { Point, pointFn } from "./Point";

function sketch(p: p5) {
  let point: Point = {
    x: 100,
    y: 100,
  };
  p.setup = () => {
    p.createCanvas(800, 800);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.rect(point.x, point.y, 50, 50);
    point = pointFn(point);
  };
}

new p5(sketch);
