# Rock Paper Scissors (가위 바위 보)

HTML + CSS + JS를 활용한 인터랙티브 가위 바위 보 게임

## 특징

- 순수 HTML, CSS, JavaScript로 구현된 웹 게임
- Font Awesome을 활용한 직관적인 손 모양 아이콘
- 애니메이션과 시각적 효과를 통한 게임 피드백
- 반응형 디자인 (모바일, 데스크톱 지원)
- 10라운드 게임 시스템

## 주요 기능

### 1. 게임 상태 관리

- 플레이어와 컴퓨터의 점수 추적
- 남은 라운드 카운트 다운
- 게임 종료 후 최종 결과 표시

### 2. 인터랙티브 게임플레이

- 실시간 승패 판정
- 손 모양 애니메이션 효과
- 승/패/무승부 시각적 피드백
- 게임 재시작 기능

### 3. UI/UX 디자인

- 글래스모피즘 디자인의 게임 컨테이너
- 호버 효과가 적용된 선택 버튼
- 승패 결과에 따른 동적 색상 변화
- 부드러운 애니메이션 트랜지션

### 4. 반응형 디자인 브레이크포인트

- 데스크톱 (768px 이상): 기본 레이아웃
- 모바일 (768px 이하):
  - 수직 정렬된 선택 버튼

## 기술 스택

### Frontend

- HTML5
- CSS3 (Modern CSS Features: Flexbox, CSS Animation, Custom Properties)
- Vanilla JavaScript (ES6+)

### External Libraries

- Font Awesome 5.15.2 (아이콘)
- Google Fonts (Poppins)

## 구조

```
r-p-s/
├── index.html # 메인 HTML 구조
├── index.css # 스타일링
└── index.js # 게임 로직

```

## 주요 컴포넌트

### HTML 구조

- 메인 컨테이너
- 스코어보드
- 게임 결과 표시
- 선택 버튼 영역
- 게임 상태 표시 영역

### CSS 특징

- 커스텀 애니메이션 (shake, fadeIn, winnerPulse)
- 반응형 미디어 쿼리
- Flexbox 레이아웃
- 동적 상태 스타일링

### JavaScript 기능

- 게임 상태 관리 (gameState 객체)
- 승패 판정 로직
- 애니메이션 제어
- 이벤트 핸들링
- 점수 계산 및 업데이트

## 게임 규칙

1. 플레이어는 가위, 바위, 보 중 하나를 선택
2. 컴퓨터는 무작위로 선택
3. 총 10라운드 진행
4. 각 라운드마다 승패 결정:
   - 가위 > 보
   - 바위 > 가위
   - 보 > 바위
5. 게임 종료 후 최종 승자 판정
