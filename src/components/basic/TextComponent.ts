import { BaseComponent } from '../Base';
import { TextComponentStyle } from '../../../style/components/basic/TextComponent.css';

export class TextComponent extends BaseComponent<HTMLSpanElement> {
  private _text: string;
  private _color: string;
  private _fontSize: string;
  private _fontWeight: string;
  constructor(
    text: string,
    color: string = '',
    fontSize: string = '',
    fontWeight: string = '',
  ) {
    super(`<span class='${TextComponentStyle}'>${text}</span>`);
    this._text = text;
    this._color = color;
    this._fontSize = fontSize;
    this._fontWeight = fontWeight;

    this.init();
  }

  init() {
    this.setStyles({
      color: this._color,
      fontSize: this._fontSize,
      fontWeight: this._fontWeight,
    });
  }
}
