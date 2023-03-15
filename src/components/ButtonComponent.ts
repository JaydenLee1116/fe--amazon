import { BaseComponent } from '../Base';
import { ButtonComponentStyle } from '../../style/components/ButtonComponent.css';

export class ButtonComponent extends BaseComponent<HTMLElement> {
  constructor(content: string) {
    super(`<button class='${ButtonComponentStyle}'>${content}</button>`);
  }
}
