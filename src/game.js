import * as PIXI from 'pixi.js';
import { Circle } from './circle';
import { Shape } from './shape';
import { Rectangel } from './rectangel';
import { Square } from './squar';
import { Triangle } from './triangel';

export class Game extends PIXI.Application {
  constructor() {
    super({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0xcccccc,
    });

    document.body.appendChild(this.view);

    this.ticker.add(this._update, this);
    this.ticker.start();

    this.loader.onComplete.add(this._onLoadComplete, this);
    this.loader.load();
  }

  _onLoadComplete() {
    const circle = new Circle(1);
    console.warn(`CIRCLE | area: ${circle.getArea()}, perimeter: ${circle.getPerimeter()}`);
    const rectangel = new Rectangel(1, 2);
    console.warn(`CIRCLE | area: ${rectangel.getArea()}, perimeter: ${rectangel.getPerimeter()}`);
    const square = new Square(2);
    console.warn(`CIRCLE | area: ${square.getArea()}, perimeter: ${square.getPerimeter()}`);
    const triangle = new Triangle(3, 4, 8);
    console.warn(`CIRCLE | area: ${triangle.getArea()}, perimeter: ${triangle.getPerimeter()}`);
  }

  _update() {}
}
