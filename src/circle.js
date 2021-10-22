import { Shape } from './shape';

export class Circle extends Shape {
  constructor(radius) {
    super();
    this._radius = radius;
  }

  getArea() {
    return Math.PI * this._radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this._radius;
  }
}
