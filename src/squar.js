import { Rectangel } from './rectangel';

export class Square extends Rectangel {
  constructor(x) {
    super(x, x);
    this.x = x;
  }
}
