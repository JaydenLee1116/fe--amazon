import { BaseComponent } from '../Base';
import { headerStyle } from '../../style/components/header.css.js';

export class HeaderComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<header class='${headerStyle}'>
			<div class='nav-bar'>
				<div class='nav-bar__main'>
					<div class='nav-bar__logo'>
						<img class='logo' src='assets/nav-bar/logo.svg' />
					</div>
					<div class='nav-bar__shipping-country'>
						<div class='shipping-country'>
							<div class='shipping-country__header'>
								<img class='shipping-country__icon' src='assets/nav-bar/position.svg'>
								<span class='shipping-country__text'>배송처</span>
							</div>
							<div class='shipping-country__main'>미국</div>
						</div>
						<div class='address-changing'>
							<div class='address-changing__text'>UN으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를 변경하십시오.</div>
							<div class='address-changing__buttons'>
								<button class='continue-btn'>계속</button>
								<button class='change-btn'>주소변경</button>
							</div>

						</div>
					</div>
					<div class='nav-bar__search-form'>
						<div class='search-form'>
							<input class='search-form__input' placeholder='검색 Amazon' type='search' />
							<button class='search-form__button'>
								<img class='search-icon' src='assets/nav-bar/reading-glasses.svg'>
							</button>
						</div>
					</div>
					<div class='nav-bar__language'>
						<div class='language'>
							<img class='flag-icon' src='assets/nav-bar/flag-un.svg'>
							<span class='language__text'>UN</span>
						</div>
					</div>
					<div class='nav-bar__user-account'>
						<div class='user-account'>
							<div class='user-account__header'>안녕하세요, 로그인</div>
							<div class='user-account__main'>계정 및 목록</div>
						</div>
						<div class='login'>
							<button class='login__button'>로그인</button>
							<div class='login__text'>
								<span class='login__question'>기존 사용자가 아니십니까?</span>
								<a class='login__start-page' href=''>여기에서 시작합니다.</a>
							</div>
							<div class='user-expansion'>
								<div class='gray-line'></div>
								<div class='user-expansion__content'>
									<ul class='user-expansion__user-list'>
										<li class='user-list__title'>귀하의 목록</li>
										<li>목록 생성</li>
										<li>목록 또는 레지스트리 찾기</li>
										<li>AmazonSmile 자선 품목 목록</li>
									</ul>
									<ul class='user-expansion__account-list'>
										<li class='account-list__title'>계정</li>
										<li>계정</li>
										<li>주문</li>
										<li>권장 사항</li>
										<li>검색 기록</li>
										<li>워치리스트</li>
										<li>비디오 구매 및 대여</li>
										<li>Kindle 언리미티드</li>
										<li>콘텐츠 및 기기</li>
										<li>항목 구독 및 저장</li>
										<li>멤버십 및 구독</li>
										<li>음악 라이브러리</li>
									</ul>
								</div>
							</div>
						</div>

					</div>
					<div class='nav-bar__user-order'>
						<div class='user-order'>
							<div class='user-order__return-text'>반품</div>
							<div class='user-order__order-text'>& 주문</div>
						</div>
					</div>
					<div class='nav-bar__user-basket'>
						<div class='basket'>
							<img class='basket-icon' src='assets/nav-bar/basket.svg'>
							<span class='basket__text'>장바구니</span>
						</div>
					</div>
				</div>
				<div class='nav-bar__sub'>
					<div class='nav-bar__all-list'>
						<div class='all-list'>
							<img class='hamburger-icon' src='assets/nav-bar/nav-hamburger.svg' />
							<span class='all-list__text'>모두</span>
						</div>
					</div>
					<div class='nav-bar__today-deal'>오늘의 딜</div>
					<div class='nav-bar__customer-service'>고객 서비스</div>
					<div class='nav-bar__registry'>레지스트리</div>
					<div class='nav-bar__gift-card'>기프트 카드</div>
					<div class='nav-bar__sale'>판매</div>
					<div class='nav-bar__special-price'>지금 특가 상품 쇼핑하기</div>
				</div>
			</div>
		</header>`);
  }
}
