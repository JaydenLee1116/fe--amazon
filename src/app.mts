import { DimComponent } from './components/dim';
import { HeaderComponent } from './components/header';

class App {
  private readonly dim: DimComponent;
  private readonly header: HeaderComponent;
  constructor(appRoot: HTMLElement) {
    this.header = new HeaderComponent();
    this.header.attachTo(appRoot, 'afterbegin')
    this.dim = new DimComponent();
    this.dim.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('#app')! as HTMLElement);
