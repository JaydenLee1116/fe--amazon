import { BaseComponent } from '../Base';
import { ButtonComponentStyle } from '../../../style/components/basic/ButtonComponent.css';

export class ButtonComponent extends BaseComponent<HTMLButtonElement> {
  private _text: string;
  private _type?: string;
  constructor(text: string, type?: string) {
    super(
      `<button class='${ButtonComponentStyle}' type='${type}'>${text}</button>`,
    );
    this._text = text;
    this._type = type;

    this.init();
  }

  isFlexible() {
    return this.element.getAttribute('type') === 'flexible';
  }

  makeFlexible() {
    this.setStyles({ width: '4rem' });
  }

  init() {
    if (this.isFlexible()) {
      this.makeFlexible();
    }
  }
}
