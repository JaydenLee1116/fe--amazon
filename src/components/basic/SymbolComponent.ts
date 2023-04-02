import { ImageComponent } from './ImageComponent';

export class SymbolComponent extends ImageComponent {
  private _backgroundColor?: string;
  constructor(path: string, backgroundColor?: string) {
    super(path, '1rem', '1rem');
    this._backgroundColor = backgroundColor;

    this.init();
  }

  init() {
    this.setStyles({ backgroundColor: this._backgroundColor || 'transparent' });
  }
}
