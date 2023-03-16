import { BaseComponent } from '../../../Base';
import { TextComponent } from '../../basic/TextComponent';

export class TwoRowTextComponent extends BaseComponent<HTMLElement> {
  constructor(firstText: string, secondText: string) {
    super(`<section class='${TwoRowTextComponent}'></section>`);

    const firstRow = new TextComponent(
      firstText,
      'var(--color-gray-400)',
      'var(--font-sm)',
      'var(--weight-semi-bold)',
    );
    const secondRow = new TextComponent(secondText);

    secondRow.attachTo(this.element);
    firstRow.attachTo(this.element);
  }
}
