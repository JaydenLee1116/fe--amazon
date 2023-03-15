import { BaseComponent } from '../component';
import { dimStyle } from '../../style/components/dim.css.js';

export class DimComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<div class='${dimStyle}'></div>`);
  }
}
