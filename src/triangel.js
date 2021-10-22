import { Rectangel } from './rectangel';
import { Shape } from './shape';

export class Triangle extends Shape {
  constructor(x, y, z) {
    super();
    this.x = x;
    this.y = y;
    this.z = z;
  }
  getArea() {
    return Math.sqrt(
      (this.getPerimeter() / 2) *
        (this.getPerimeter() / 2 - this.x) *
        (this.getPerimeter() / 2 - this.y) *
        (this.getPerimeter() / 2 - this.z)
    );
  }

  getPerimeter() {
    return this.x + this.y + this.z;
  }
}
