import { NavBarMainComponent } from './components/NavBarMainComponent';
import { TextComponent } from './components/TextComponent';

class App {
  constructor(appRoot: HTMLElement) {
    const navBarMain = new NavBarMainComponent();
    navBarMain.attachTo(appRoot);

    const text = new TextComponent('텍스트');
    text.attachTo(appRoot);
  }
}

new App(document.querySelector('#app')! as HTMLElement);
