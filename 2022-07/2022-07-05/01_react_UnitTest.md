## 리액트 테스트 기법

- 단위 테스트
  - 함수, 컴포넌트 등 개별 단위를 테스트하는 것
  - 컴포넌트와 컴포넌트가 연결되어 있으므로, 완벽히 단위 테스트라고 하기 어려운 부분도 있음.
    - 관련 기능이 한 모듈에 최대한 응집되어 있게 응집도를 상승시키고, 모듈이 여러 다른 모듈들에 의존하지 않도록  결합도를 낮춘다.
- 통합 테스트
  - 여러 모듈 혹은 컴포넌트들을 합치는 테스트
- End to End 테스트
  - 전체 워크플로우를 실행하는 것 이다.
  - 전체 시나리오 및 사람이 웹사이트에서 수행하는 모든 기능을 전체 흐름으로 테스트한다.



### 1. Jest

- 기본적으로 `create-react-app`에 내장된 리액트 테스팅 도구
- `npm test`를 통해 테스트 실행
  - `test`는 `모듈이름.test.js`파일들을 실행시켜 각 컴포넌트에 대한 테스트를 진행하고 성공 혹은 실패를 알려준다.
- 테스트 작성의 세가지 준비물(`3 "A"s`)
  - Arrange(준비단계) - 테스트할 컴포넌트를 랜더링.
  - Act(실행) - 실제로 테스트를 실행하는 단계
  - Assert(단언) - 화면 상의 결과를 검토

```react
//Greeting.js

const Greeting = () => {
    return <div>
    	<h2>Hello World!</h2>
        <p>It's good to see you</p>
    </div>
}
```

```react
//Greeting.test.js
import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

test('renders Hello World as a text', () => {
    //Arrange
    render(<Greeting/>) //컴포넌트 랜더링
    
    // Act
   	// nothing
    
    //Assert
    //Arrange 단계에서 랜더링한 가상 돔에 Hello World가 출력되는지 검토
    const helloWorldElement = screen.getByText('Hello World', { exact: false }) //해당 텍스트가 정확히 같은 값이 아니어도 HelloWorld가 포함만 되어있으면 되게 exact: false를 줌. 느낌표까지 붙은 정확한 값은 true
    
    expect(helloWorldElement).toBeInTheDocument() //엘리먼트가 문서 안에 있는지 확인하고 싶은 것.
})
```

- describe를 사용해 suite로 묶으면 테스트를 하나의 그룹에 묶어서 관리하는게 가능하다.

```react
describe('Greeting Test', () => {
    //기존의 테스트
})
```

- 위와 같이 describe로 묶으면 Greeting Test라는 이름 하에 테스트 그룹(Test Suites)가 생성된다.
