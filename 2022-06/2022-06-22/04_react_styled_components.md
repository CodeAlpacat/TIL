## 4. Styled Components

- Styled Components 란? 스타일이 적용되는 컴포넌트에만 영향을 미치고 다른 곳에서는 영향을 미치지 않는 라이브러리이다.
- 설치는 다음과 같다. `npm install --save styled-components`



#### Tagged template Literal

- 메서드의 괄호 대신에 백틱으로 전달하는 구문이다.
- `styled.button` 은 신기하게도 새로운 `button`을 반환하는 메서드이다.
  - `h1 h2 p a button` 어떤 html 태그들을 포함하고 있다.
- 이는 굳이 `.button`과 같은 선택자가 필요없고, 적용되는 추가적인 동작은 `&`을 붙이면 된다.
- 이렇게 생성된 버튼은 동적으로 생성된 클래스를 가지게 된다. 그리고 그 스타일 클래스는 고유한 값이므로, 다른 컴포넌트에 영향을 주지 않는다.

```react
import styled from 'styled-components';

const Button = styled.button`
	font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`
```

- 그리고 동적으로 백틱 내부로 `props`를 넘길 수 있다. 생성된 `Button`을 사용할 때, `props`를 넘기고
- `border: 1px solid ${props => (props.전달받은 인자 ? 'red' : 'blue')}`의 형태를 통해 동적으로 세부적인 css 요소에 접근할 수 있다.