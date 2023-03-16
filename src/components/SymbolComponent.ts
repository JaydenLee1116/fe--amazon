import { SymbolComponentStyle } from '../../style/components/SymbolComponent.css';
import { ImageComponent } from './ImageComponent';

export class SymbolComponent extends ImageComponent {
  constructor(path: string, backgroundColor?: string) {
    super(path, '1rem', '1rem');

    this.element.style.backgroundColor =
      backgroundColor || 'var(--color-black)';
  }
}
