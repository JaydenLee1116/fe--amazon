import { BaseComponent } from '../Base';
import { ImageComponent } from './ImageComponent';
import { AnchorComponent } from './AnchorComponent';
import { SearchBarComponent } from './SearchBarComponent';
import { NavBarMainComponentStyle } from '../../style/components/NavBarMainComponent.css';

export class NavBarMainComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${NavBarMainComponentStyle}'></section>`);
    const logo = new ImageComponent(
      'assets/nav-bar/logo.svg',
      '6rem',
      '2.5rem',
    );
    const shippingAddress = new AnchorComponent('', '배송처 대한민국');
    const searchBar = new SearchBarComponent();
    const nation = new AnchorComponent('', 'UN');
    const login = new AnchorComponent('', '안녕하세요, 로그인');
    const myPage = new AnchorComponent('', '반품 & 주문');
    const cart = new AnchorComponent('', '장바구니');
    cart.attachTo(this.element);
    myPage.attachTo(this.element);
    login.attachTo(this.element);
    nation.attachTo(this.element);
    searchBar.attachTo(this.element);
    shippingAddress.attachTo(this.element);
    logo.attachTo(this.element);
  }
}
