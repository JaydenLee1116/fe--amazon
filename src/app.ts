import { NavBarMainComponent } from './components/navbar/main/NavBarMainComponent';

class App {
  constructor(appRoot: HTMLElement) {
    const navBarMain = new NavBarMainComponent();
    navBarMain.attachTo(appRoot);
  }
}

new App(document.querySelector('#app')! as HTMLElement);
