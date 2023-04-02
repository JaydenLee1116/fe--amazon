import { BaseComponent } from '../Base';
import { ImageComponentStyle } from '../../../style/components/basic/ImageComponent.css';

export class ImageComponent extends BaseComponent<HTMLImageElement> {
  private _width: string;
  private _height: string;
  constructor(path: string, width: string, height: string) {
    super(`<img class='${ImageComponentStyle}' src='${path}' />`);
    this._width = width;
    this._height = height;

    this.init();
  }

  init() {
    this.setStyles({ width: this._width, height: this._height });
  }
}
