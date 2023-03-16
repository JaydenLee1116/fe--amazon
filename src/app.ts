import { DimLayerComponent } from './components/layers/DimLayerComponent';
import { ButtonComponent } from './components/ButtonComponent';
import { SymbolComponent } from './components/SymbolComponent';
import { ImageComponent } from './components/ImageComponent';
import { AnchorComponent } from './components/AnchorComponent';
import { SearchBarComponent } from './components/SearchBarComponent';
import { NavBarMainComponent } from './components/NavBarMainComponent';

class App {
  private readonly dim: DimLayerComponent;
  constructor(appRoot: HTMLElement) {
    const navBarMain = new NavBarMainComponent();
    navBarMain.attachTo(appRoot);

    this.dim = new DimLayerComponent();
    // this.dim.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('#app')! as HTMLElement);
