import { DimLayerComponent } from './components/layers/DimLayerComponent';
import { ButtonComponent } from './components/ButtonComponent';
import { SymbolComponent } from './components/SymbolComponent';

class App {
  private readonly dim: DimLayerComponent;
  private readonly button: ButtonComponent;
  private readonly symbol: SymbolComponent;
  constructor(appRoot: HTMLElement) {
    this.button = new ButtonComponent('Button', 'flexible');
    this.symbol = new SymbolComponent('assets/nav-bar/logo.svg');
    this.dim = new DimLayerComponent();
    // this.button.attachTo(appRoot);
    this.symbol.attachTo(appRoot);
    this.dim.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('#app')! as HTMLElement);
