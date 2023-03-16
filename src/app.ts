import { DimLayerComponent } from './components/layers/DimLayerComponent';
import { ButtonComponent } from './components/ButtonComponent';
import { SymbolComponent } from './components/SymbolComponent';
import { ImageComponent } from './components/ImageComponent';
import { AnchorComponent } from './components/AnchorComponent';

class App {
  private readonly dim: DimLayerComponent;
  private readonly button: ButtonComponent;
  private readonly image: ImageComponent;
  private readonly symbol: SymbolComponent;
  private readonly anchor: AnchorComponent;
  constructor(appRoot: HTMLElement) {
    this.button = new ButtonComponent('Button', 'flexible');
    this.image = new ImageComponent('assets/nav-bar/logo.svg', '6rem', '2rem');
    this.symbol = new SymbolComponent(
      'assets/nav-bar/logo.svg',
      'var(--color-white)',
    );

    this.anchor = new AnchorComponent('', '오늘의 딜');
    this.dim = new DimLayerComponent();
    this.button.attachTo(appRoot);
    this.image.attachTo(appRoot);
    this.symbol.attachTo(appRoot);
    this.anchor.attachTo(appRoot);
    // this.dim.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('#app')! as HTMLElement);
