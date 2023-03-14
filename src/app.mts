import { DimComponent } from './components/dim';

class App {
  private readonly dim: DimComponent;
  constructor(appRoot: HTMLElement) {
    this.dim = new DimComponent();
    this.dim.attachTo(appRoot);
  }
}

new App(document.querySelector('#app')! as HTMLElement);
