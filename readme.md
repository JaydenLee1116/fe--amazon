# 🪴 Jayden's Week-01

- `23.03.06(Mon) ~ 23.03.10(Fri)`

## 🌵 Jayden's Keywords

- HTML
  - flex, grid
- CSS
  - BEM
- HTML, CSS 디버깅
- branch, commit 올바른 분리
- 코딩 컨밴션

## 🌴 Jayden's Rules

- 용도에 맞는 올바른 semantic 태그를 사용한다.(`div`, `span` 태그를 남발하지 않는다.)
- 눈으로 보기에만 가지런한 게 아닌, html/css 기능을 통해 확실하게 `일정한 간격`을 갖게 한다.
- DOM api를 명확히 알고 사용한다.

## 🌲 Jayden's Check List

- [x] readme 작성하기
- html 레이아웃 만들기
  - [x] 상단 header 영역
  - [x] 70rem(1120px) 기준 width 반응형
  - [x] 좌측 사이드 메뉴
- 모달
  - [x] 우측 상단: 국가, 계정 및 목록

## 🌳 Jayden's Organization

### `draft` Pull Request

- 아직 변경 사항이 완료되지 않았고 리뷰 및 피드백을 받길 원할 때 설정한다.
- 작업을 공유하고 다른 기여자들로부터 피드백을 받을 수 있다.
- 변경 사항이 완료되기 전에 검토하여, 프로세스 초기에 잠재적인 문제를 파악할 수 있다.
- 아직 병합하면 안되는 PR임을 가시적으로 알 수 있다.

### 코딩 컨벤션
  
- 읽고 관리하기 쉬운 코드를 작성하기 위한 코딩 스타일 약속
- 특히 자바스크립트는 다른 언어에 비해 유연한 문법구조를 갖고 있기에 더욱더 중요하다.
- 보통 ESLint와 같은 린터를 사용한다는 가정하에 린터로 검출할 수 없는 모호한 부분을 가이드로 작성한다.
- 참고: [Toast UI 코딩 컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)

### upstream에서 fork 후 local로 clone할 때, main 브랜치 없이 clone이 가능한가?
  
- clone 후에 main 브랜치를 삭제하면 된다.(혹시 모르니 일단은 두기로)

### feature1 브랜치에서 작업 후, pr을 날린 상태에서 feature1을 기반으로 feature2를 작업해야한다. 이 때, 아직 feature1이 머지가 안되었다면 어떻게 할까?
  
- feature1에서 feature2 브랜치를 따서 작업한다. 이후 feature1이 main에 머지되면 자연스럽게 feature2도 main에서 따온 것처럼 된다.

### css에서 변수를 만들어서 사용하기

- 아래와 같이 `:root` 에 변수를 설정해준다.
- 설정한 변수를 `var(변수명)`형태로 사용한다.

```css
/* Global */

:root {
  /* Color */
  --color-white: #ffffff;
  --color-gray-100: #eff2f2;
  --color-gray-200: #e5e9e9;
  --color-gray-300: #dce0e0;
  --color-gray-400: #d5d5d5;
  --color-gray-500: #c1c1c1;
  --color-gray-600: #878787;
  --color-gray-700: #535353;
  --color-gray-800: #2a3648;
  --color-gray-900: #1b232f;
  --color-black: #10141a;
  --color-black-tr40: rgba(16, 20, 26, 0.4);

  --color-yellow-100: #fed15f;
  --color-yellow-200: #febe30;
  --color-yellow-300: #de9408;
  --color-orange-100: #fcb057;
  --color-orange-200: #ff9900;

  --color-purple: #941387;
  --color-navy: #074099;
  --color-green: #0c5e72;

  /* Font size */
  --font-large: 48px;
  --font-medium: 28px;
  --font-regular: 18px;
  --font-small: 16px;
  --font-micro: 14px;
}

div {
  color: var(--color-orange-100);
}
```

### box-sizing 설정

- 기본적으로 `content-box`로 설정되어있다.
  - content-box: width, height가 padding 내부의 content를 기준으로 한다.
  - border-box: width, height가 content, padding, border를 포함한 것을 기준으로 한다.

### `reset css` vs `normalize css`

- reset css: 브라우저가 기본적으로 제공하는 내장 스타일을 모두 초기화
  - 최근에는 [new css reset](https://elad2412.github.io/the-new-css-reset/)이 자주 사용된다.
- normalize css: 가능한 브라우저들의 내장 스타일을 건드리지 않는 선에서 브라우저들 간의 차이점을 통일
  - 같은 `h1` 태그라도 브라우저마다 여백의 크기가 조금씩 다를 수 있다. 이런 부분을 동일하게 통일해준다.

### css 상속(inheritance)과 적용 우선 순위(cascading)

- 상속: 상위(부모) 태그에 적용된 스타일이 하위(자식) 태그에도 상속되어 적용되는 것
  - 몇몇 상속이 안되는 스타일이 있는데, 주로 box-model과 관련된 스타일이다. ex) padding
- 적용 우선 순위: css는 어떻게 스타일을 적용하느냐에 따라 그 우선순위가 다르다.
  - 우선순위로는 `사용자 설정` - `inline style` - `internal stylesheet` - `external stylesheet` - `browser default`로 점점 낮아진다.
  - 또한, css의 `specificity`에 따라 `class`보다 `id`가 스타일에 대한 우선순위를 갖는다.(더욱 자세한 선택자일수록 우선순위를 갖는다.)
- (주의) css의 상속과 캐스케이딩은 엄밀히 다른 개념!!!

### `display: flex`에서 `flex-grow` 속성이란?

- display가 flex로 설정된 태그의 자식 태그들에 사용하며, 각 자식 태그들은 기본적으로 `flex-grow: 0;`이다.
- 더 높은 숫자를 설정하게 되 다른 태그들과의 사이에서 해당 숫자의 크기 비율을 갖는다.

### css 상대 단위 2대장: `em` vs `rem`

- em: 위치한 곳을 기준으로 font-size에 대한 배율(해당 요소에 font-size 없으면 부모 요소, 없으면 또 부모 요소)
- rem: 위치한 곳과 상관없이 가장 최상위 요소(root; html 태그)의 font-size에 대한 배율
- (주의) em은 너무 상대적인 느낌이고 rem은 그나마 절대적인 root를 기준으로 하기에, rem 사용을 좀더 추천한다.
- (나만의 팁) 전체적인 레이아웃은 %로 맞추되, 그 안에 디테일한 박스 크기는 rem으로 해주면 편한 것 같다!

### 웹 접근성(예정)

### 웹 사이트 접속 시 브라우저의 렌더링 과정(예정)

## 🪵 Reference

- [Naver Coding Convention](https://github.com/naver/eslint-config-naver/blob/master/STYLE_GUIDE.md)
- [CSS BEM](https://nykim.work/15)
- [HTML elements & attributes](https://heropy.blog/2019/05/26/html-elements/)
- [Box-model: content-box vs border-box](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- [reset css과 normalize css](https://www.daleseo.com/css-normalize-reset/)
- [css 상속(inheritance)과 적용 우선 순위(cascading)](https://poiemaweb.com/css3-inheritance-cascading)
- [css media query](https://www.daleseo.com/css-media-queries/)

# 🪴 Jayden's Week-02

- `23.03.13(Mon) ~ 23.03.17(Fri)`

## 🌵 Jayden's Keywords

- CSS
  - SCSS, 그 외 다른 CSS 라이브러리
- DOM api
- Vite 번들러

## 🌴 Jayden's Rules

- DOM api를 명확히 알고 사용한다.
- 최대한 DOM 조작에서 안전한 js 코드를 짠다.
- 리팩토링에 많은 공을 들여보자!!!

## 🌾 Jayden's Learning Plan

- Mon: DOM api 및 Event delegation 학습(코드스쿼드 자료)
- Tue: 리팩토링 진행 및 vanilla extract 학습
- Wed: 리팩토링 완전 집중!!! 작게라도 component 열심히 나누기!!!
- Thu: 리팩토링 및 애니메이션 작업
- Fri: 개념 복습 및 구현 디테일 살리기

## 🌲 Jayden's Check List

- [x] readme 작성하기
- [x] sidebar
  - [x] 항목 접기/펼치기
  - [x] 하위 메뉴 영역 노출
- [ ] `리팩토링`(변수명, 함수 분리 등)
  - [x] css 파일 분리

## 🌳 Jayden's Record

### DOM api가 존재하는 이유

- DOM Tree를 탐색하기 위해 JS로 탐색 알고리즘을 구현하면 너무 힘고 번거롭다.
- 해서 브라우저에서 DOM Tree를 탐색하기 위한 다양한 DOM api를 제공한다.

### textNode vs elementNode

- DOM의 노드들은 대부분 text 노드와 element 노드로 나누어진다.
- firstChild, nextSibling 등은 태그 사이의 공백인 textNode까지 인식한다.
- firstElementChild, firstElementChild 등은 textNode를 제외한 elementNode만 인식한다.
- 우리는 주로 textNode를 이용할 일이 없기 때문에, 주로 element가 들어간 api를 이용한다.

### 이벤트 위임

- 발생한 이벤트에 대한 리스너를 버블링(혹은 캡쳐링)을 이용해서 상위 태그에 달아서 이벤트에 따른 함수를 실행하는 방법
  - 버블링: 이벤트가 발생한 요소에서 상위 요소로 가는 단계
  - 캡쳐링: 상위 요소에서 이벤트가 발생한 요소로 가는 단계
  - 캡쳐링은 사용할 일이 거의 없고, 주로 버블링을 통한 이벤트 위임을 사용한다.

### `stopPropagation` vs `preventDefault`

- stopPropagation: 특정 태그에서 이벤트의 전달을 막는 api
- preventDefault: 해당 태그가 가진 기본적인 기능을 막는 api

### git stash

- a 브랜치에서 b 브랜치를 따고 로컬에서만 b 브랜치에 변경 사항이 발생하면 a 브랜치로 스위치가 가능하다.
  - 이유: commit을 기준으로는 변경이 일어나지 않았고, 로컬에서 워킹 디렉토리에서만 변경이 있기 때문에 b에서의 변경사항 이 a로 그대로 가져가진다.
  - 이 때! stash 혹은 commit을 해서 변경사항을 반영할 수 있는데, 솔직히 커밋은 기능 단위로 하는 경우가 많기에 함부로 commit을 하기 애매하다.
  - 이 때 stash를 통해 최근 커밋 기준 다음 변경사항들을 따로 빼두는 것이다.
  - 그렇다면 언제 `브랜치를 변경하기 전에 commit 혹은 stash를 하라`는 에러가 발생할까?
  - a 브랜치에서 b 브랜치를 따고 b 브랜치에서 작업을 한 뒤 커밋을 한다. 그러고 나서 또다시 로컬(워킹 디렉토리)에서 작업을 하고 a로 옮기려고 하면 에러가 발생한다.
  - 이 때, stash로 변경사항을 잠깐 빼두든가 아니면 또다시 커밋을 해서 변경사항을 반영하고 옮기면 된다.

### el.firstChild가 때로는 textNode가 뜨지 않을 때!(feat. 브라우저)

- 브라우저에서는 html 파일들의 요소들이 최적화되어 공백없이(textNode가 없이) 정리된다.
- 해서 firstChild로 textNode가 안찍히기도 한다!

## 🪵 Reference

- [이벤트 위임](https://www.grapecity.com/blogs/html-and-wijmo-events/)
- [stopPropagation vs preventDefault](https://ismydream.tistory.com/98)
- [Git stash](https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-Stashing%EA%B3%BC-Cleaning)