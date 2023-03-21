import { NavBarMainComponent } from './components/navbar/main/NavBarMainComponent';
import { NavBarSubComponent } from './components/navbar/sub/NavBarSubComponent';
import $ from './utils/$';
import { SideBarComponent } from './components/sidebar/SideBarComponent';
import { DimLayerComponent } from './components/layer/DimLayerComponent';

class App {
  constructor(appRoot: HTMLElement) {
    const navBarMain = new NavBarMainComponent();
    const navBarSub = new NavBarSubComponent();
    const sideBar = new SideBarComponent();
    const dimLayer = new DimLayerComponent();
    dimLayer.attachTo(document.querySelector('#app')! as HTMLElement);
    dimLayer.element.addEventListener('click', () => {
      sideBar.element.style.left = '-20rem';
      dimLayer.off();
    });
    navBarSub.element.firstElementChild!.addEventListener('click', () => {
      sideBar.element.style.left = '0';
      dimLayer.on();
    });
    navBarMain.attachTo(appRoot);
    navBarSub.attachTo(appRoot, 'beforeend');
    sideBar.attachTo(appRoot, 'beforeend');
  }
}

new App($('#app')! as HTMLElement);
