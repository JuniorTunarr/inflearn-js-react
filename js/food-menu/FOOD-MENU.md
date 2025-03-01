# Food Menu

HTML + CSS + JS를 활용한 반응형 음식 메뉴 웹 애플리케이션

## 특징

- 순수 HTML, CSS, JavaScript로 구현된 SPA(Single Page Application)
- DummyJSON API를 활용한 실시간 레시피 데이터 fetching
- 카테고리별 필터링 기능 (All, Breakfast, Lunch, Shakes, Dinner)
- 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)

## 주요 기능

### 1. 데이터 관리

- DummyJSON의 recipes API를 활용한 동적 데이터 로딩
- 레시피 데이터 가공 (가격 책정, 식사 유형 조정)

### 2. 카테고리 필터링

- 카테고리별 메뉴 아이템 필터링
- 활성화된 카테고리 시각적 표시
- 부드러운 카테고리 전환 효과

### 3. UI/UX 디자인

- 그리드 레이아웃을 활용한 2열 메뉴 디스플레이
- 호버 시 메뉴 아이템 리프트 효과
- 부드러운 그림자 효과와 트랜지션

### 4. 반응형 디자인 브레이크포인트

- 데스크톱 (1200px 이상): 기본 레이아웃
- 대형 태블릿 (992px ~ 1200px): 이미지 크기 조정
- 태블릿 (768px ~ 992px): 1열 레이아웃
- 모바일 (768px 이하): 수직 레이아웃, 이미지 전체 너비
- 소형 모바일 (520px 이하):
  - 탭 버튼 2열 그리드 레이아웃으로 변경
  - 버튼 크기 조정 및 간격 최적화

## 기술 스택

### Frontend

- HTML5
- CSS3 (Modern CSS Features: Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- Fetch API

### External API

- DummyJSON Recipes API

## 구조

```
food-menu/
├── index.html      # 메인 HTML 구조
├── index.css       # 스타일링
└── index.js        # 비즈니스 로직
```

## 주요 컴포넌트

### HTML 구조

- 메인 컨테이너
- 제목 섹션
- 카테고리 탭 버튼
- 메뉴 아이템 그리드

### CSS 특징

- CSS 중첩 문법 활용
- 반응형 미디어 쿼리
- Flexbox와 Grid 레이아웃
- 트랜지션과 애니메이션

### JavaScript 기능

- 비동기 데이터 fetching
- 동적 DOM 조작
- 이벤트 핸들링
- 카테고리 필터링 로직
