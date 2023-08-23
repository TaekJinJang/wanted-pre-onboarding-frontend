# 원티드 프리온보딩 프론트엔드 - 선발 과제
## 지원자의 성명 : 장택진
## 프로젝트 실행 방법
```
$ npm install
$ npm start
```
## 데모 영상
- 배포 링크로 대체
- https://majestic-semifreddo-01e37f.netlify.app
## Library
- typescript
- styled-components
- react-router-dom
- react-icons
## 디렉토리 구조
```📦src
 ┣ 📂apis
 ┣ 📂components
 ┃ ┣ 📜TodoInput.tsx
 ┃ ┣ 📜TodoList.tsx
 ┃ ┣ 📜TodoUpdate.tsx
 ┃ ┗ 📜TodoView.tsx
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂types
 ┣ 📂UI
 ┣ 📜App.tsx
 ┣ 📜index.tsx

 ```
 ----------------------------


 ## 아쉬운 점
 
 - page 폴더엔 최대한 간결하게 보이기
 - custom hooks를 더 줄일 수 있는지 생각하기 (세분화 후 validation )
 - 공통되는 form이 있다면 효율적인 재사용을 생각해보기
 - context API 추가
 - type 정의 간결화하기
 - 하나의 커밋에 하나의 작업만 하기

## 고민 해볼 점
- todoUpdate를 진행할 때 수정할 때마다 데이터를 넘겨주고 받아오고 총 두번의 패칭을 하는데 넘겨만 주고 state를 통해 보여주는건(눈속임) 어떨까?
- 컴포넌트에 props로 넘기는 함수 (버튼의 onclick)가 있을 땐 useCallback으로 감싸서 함수를 캐싱하는게 더 효율적이지 않을까?
