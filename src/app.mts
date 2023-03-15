import { DimLayerComponent } from './components/layers/DimLayerComponent';
import { ButtonComponent } from './components/ButtonComponent';
class App {
  private readonly dim: DimLayerComponent;
  private readonly button: ButtonComponent;
  constructor(appRoot: HTMLElement) {
    this.button = new ButtonComponent('Button');
    this.dim = new DimLayerComponent();
    this.button.attachTo(appRoot);
    this.dim.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('#app')! as HTMLElement);
