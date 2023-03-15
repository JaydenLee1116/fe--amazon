import { BaseComponent } from '../Base';
import { SymbolComponentStyle } from '../../style/components/SymbolComponent.css';

export class SymbolComponent extends BaseComponent<HTMLElement> {
  constructor(path: string) {
    super(`<img class='${SymbolComponentStyle}' src='${path}' />`);
  }
}
