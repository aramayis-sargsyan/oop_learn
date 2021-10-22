import { Shape } from './shape';

export class Rectangel extends Shape {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }

  getArea() {
    return this.x * this.y;
  }

  getPerimeter() {
    return 2 * (this.x + this.y);
  }
}
