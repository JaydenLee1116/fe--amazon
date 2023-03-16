import { BaseComponent } from '../Base';
import { AnchorComponentStyle } from '../../style/components/AnchorComponent.css';

export class AnchorComponent extends BaseComponent<HTMLAnchorElement> {
  constructor(href: string, text: string) {
    super(`<a class='${AnchorComponentStyle}' href='${href}'>${text}</a>`);
  }
}
