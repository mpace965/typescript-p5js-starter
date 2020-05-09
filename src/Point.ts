export interface Point {
  x: number;
  y: number;
}

export function pointFn(p: Point): Point {
  return { x: p.x + 10, y: p.y + 10 };
}
