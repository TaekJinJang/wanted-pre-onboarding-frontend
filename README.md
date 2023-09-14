# refactoring -> ContextAPI

## 데모 영상

--

## 주요 리팩토링 사항

-   전체적인 UI/UX를 변경하였습니다.
-   ContextAPI를 통해 Auth 전역 상태와 Todo 전역 상태를 관리합니다.
-   데이터 패칭 오류시, 잘못된 url 입력시 다른 두개의 에러페이지를 보여줍니다.
-   SEO 최적화를 위해 helmet 라이브러리로 메타태그를 설정해줍니다.

## 디렉토리 구조

-   `Page`
-   단순 래핑의 역할과 SEO를 위한 메타태그 설정의 역할만 한다.

-   `Container`
    -   데이터 패칭, 이벤트 처리 등의 비즈니스 로직은 컨테이너가 담당한다.
    -   UI 컴포넌트를 컨트롤하는 역할이다.
-   `Component`
    -   순수하게 UI 로직만 가지고 있다.
    -   UI 관련 상태, 이벤트 핸들링만을 처리한다. 이 외는 모두 컨테이너로부터 주입 받아야 한다.
    -   반드시 독립적으로 설계되어 재사용 가능해야 한다.

📦src ┣ 📂apis ┣ 📂components ┃ ┣ 📂Auth ┃ ┣ 📂common ┃ ┣ 📂SEO ┃ ┣ 📂todo ┣ 📂constants ┣
📂containers ┣ 📂contexts ┣ 📂hooks ┣ 📂pages ┣ 📂styles ┣ 📂types ┣ 📂utils
