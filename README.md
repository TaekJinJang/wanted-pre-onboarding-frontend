# refactoring -> ContextAPI
- 팀원들과 best practice에 대해 토론하며, 제가 간과했던 부분을 보완하기 위해 리팩토링을 진행하였습니다.
- 기존 코드를 재검토하며 코드의 품질에 대한 깊은 이해를 얻었습니다.

## 🎥 데모 영상
 |Auth|Todo|
 |:---:|:---:|
 |![NEWauth](https://github.com/TaekJinJang/wanted-pre-onboarding-frontend/assets/93184838/6fe6549a-4dbf-4337-96ac-4280d061a27e)|![NEWtodo](https://github.com/TaekJinJang/wanted-pre-onboarding-frontend/assets/93184838/22cb47f3-b00f-47a6-861c-d93fb2db9a05)

## ✔️ 주요 리팩토링 사항

- 전반적인 사용자 인터페이스 및 사용자 경험 **(UI/UX)** 을 개선했습니다.
- **ContextAPI**를 활용하여 Todo의 **전역 상태**를 관리하고 있습니다.
- 데이터 패칭 오류 발생 시 또는 잘못된 URL 입력 시, 사용자에게 두 가지의 다른 **에러 페이지**를 보여줍니다.
- **검색 엔진 최적화(SEO)** 를 위해 Helmet 라이브러리를 이용하여 **메타 태그**를 설정하였습니다.

## 📁 디렉토리 구조

```
📦src
 ┣ 📂apis
 ┣ 📂components
 ┃ ┣ 📂Auth
 ┃ ┣ 📂common
 ┃ ┣ 📂SEO
 ┃ ┣ 📂todo
 ┣ 📂constants
 ┣ 📂containers
 ┣ 📂contexts
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
```
-   `Page`
-   단순 래핑의 역할과 SEO를 위한 메타태그 설정의 역할만 한다.
-   `Container`
  -   데이터 패칭, 이벤트 처리 등의 비즈니스 로직은 컨테이너가 담당한다.
  -   UI 컴포넌트를 컨트롤하는 역할이다.
-   `Component`
  -   순수하게 UI 로직만 가지고 있다.
  -   UI 관련 상태, 이벤트 핸들링만을 처리한다. 이 외는 모두 컨테이너로부터 주입 받아야 한다.
  -   반드시 독립적으로 설계되어 재사용 가능해야 한다.

## 💡 주요 개발 전략

### ContextAPI 를 통해 전역 상태 관리를 진행하였습니다.
- **리듀서**를 이용하여 상태 관리 로직을 추상화하고, **관심사의 분리**를 진행하였습니다.
- 리듀서를 활용한 로직 추상화는 코드의 **가독성**과 **유지보수성**을 향상시켰습니다. 또한, 이를 통해 애플리케이션의 복잡도가 증가할 경우에도 대응하기 용이하게 되었습니다.
- **props drilling** 문제가 발생하지 않도록 Todo와 관련된 데이터를 효과적으로 관리하였습니다.
- 이로 인해 개별 컴포넌트가 독립적으로 상태를 관리하는 것보다 **효율적인 상태 관리**가 가능하게 되었고, 직관적인 방식으로 **데이터 흐름**을 파악할 수 있게 되었습니다.
https://github.com/TaekJinJang/wanted-pre-onboarding-frontend/blob/03472414f0055512e5b4356f91f8ec77fea2417a/src/contexts/TodoContext.tsx#L14-L60

### 커스텀 훅을 통해 Auth 데이터를 관리하였습니다.
- **useAuth** 커스텀 훅은 인증 과정에서 필요한 로직을 **캡슐화**하여 **재사용성**을 높였습니다. 이를 통해 코드의 중복을 줄이고, **가독성과 유지보수성**을 향상시켰습니다.
- 이메일과 패스워드의 **유효성 검사**는 각각 '@'를 포함하는지, 그리고 길이가 8 이상인지를 확인합니다. 이런 방식으로 사용자 입력값에 대한 신뢰성을 높였습니다.
- 비동기 작업인 api 호출 시 try-catch 문법으로 에러 핸들링하였으며, 성공 시에는 로컬 스토리지에 액세스 토큰을 저장하고 사용자에게 성공 메시지를 알립니다. 실패 시에는 에러 메시지를 출력합니다.
- useEffect를 사용하여 form의 상태 변화가 있을 때마다 유효성 검사를 진행하고, 모든 입력값이 유효할 경우만 제출 버튼이 활성화되도록 하여 사용자 경험(UX)도 고려하였습니다.
https://github.com/TaekJinJang/wanted-pre-onboarding-frontend/blob/03472414f0055512e5b4356f91f8ec77fea2417a/src/hooks/useAuth.tsx#L14-L61

### `react-helmet-async`를 통해 SEO 최적화를 진행하였습니다.
- React의 단점 중 하나인 서버 사이드 렌더링(SSR)을 지원하지 않아 **검색 엔진 최적화(SEO)** 에 어려움이 있다는 점입니다.
- 이를 해결하기 위해 페이지별로 메타 태그를 설정할 수 있는 라이브러리를 활용하였습니다.
- 이로써 각 페이지가 유니크한 제목, 설명 및 키워드를 가질 수 있게 되어 SEO 성능을 **개선**시켰습니다.
