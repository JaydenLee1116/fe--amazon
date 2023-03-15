import { BaseComponent } from '../Base';
import { ButtonComponentStyle } from '../../style/components/ButtonComponent.css';

export class ButtonComponent extends BaseComponent<HTMLElement> {
  constructor(content: string, type?: string) {
    super(
      `<button class='${ButtonComponentStyle}' type='${type}'>${content}</button>`,
    );
    console.log(this.element);
    console.log(this.element.getAttribute('type'));
    if (this.element.getAttribute('type') === 'flexible') {
      this.element.style.width = '4rem';
    }
  }
}
