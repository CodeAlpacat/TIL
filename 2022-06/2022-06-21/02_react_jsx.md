## 2. JSX

- JSX는 리액트에서 사용하는 UI를 정의할 때 사용하는 도구다.
- JSX는 HTML 문법과도 같은 형태를 가졌지만 실제로는 JavaScript로써 export되는 동작 방식을 가지고 있다.
- 이는 브라우저에서 번들링되는 과정에서 Babel을 사용해 일반 JS 문법으로 변환해준다. 
  - **번들링이란?** 기능별로 모듈화했던 JavaScript 파일을 묶어주는 작업
  - **번들러에 대하여** => 웹팩(Webpack)과 같은 번들러의 주 역할은 서로 연관(의존성) 있는 여러 JS파일(모듈)들을 하나의 번들(Bundle) 파일로 묶어주는 역할을 한다.
    - Webpack을 이용한 Bundling 작업 덕분에 한 파일(CSR의 가장 큰 특징)에서 모두 묶어 요청/응답을 받으므로 **네트워크 코스트가 줄어든다**
    -  **Webpack**의 주요 구성 요소 중 하나인 로더(Loder)가 일부 브라우저에서 지원이 되지 않는 ES6 형식의 자바스크립트 파일을 ES5로 변환하여 사용가능하게 한다. 즉, 고전의 브라우저까지 모두 호환할 수 있도록 돕는 아주 효자스러운 기능을 가졌다.


### 예제

1.

```react
import React from 'react';

return React.createElement('div', {}, 
			React.createElement('h2', {}, "Let's get JSX!"),
            React.createElement(Expenses, {item: expenses}, "Let's get JSX2!") //Expenses는 컴포넌트
            )
```

2.

```react
return (
	<div>
      <h2>Let's get JSX!</h2>
      <Expenses items={expenses}/>
    </div>
)
```

- 위의 1과 2는 완전한 동치이다.

- 두 코드의 차이점은 2번은 React를 직접 가져오지 않아도 되는데 내부적으로는 1번과 같이 동작하고 있다.
- 위의 `return React.createElement` 구문을 보면 반환은 오직 하나의 div 태그이고 내부적으로 계속해서 하위 태그들을 만들어내는 것을 볼 수 있다. 이러한 이유로 `return`은 오직 한 개만 반환하기에 div로 감싸주는 것 이다.
- 그리고 1번과 같이 사용하기 위해서는 React를 명시적으로 import해서 사용해야만한다.



#### 즉, 보이지 않았겠지만, 내부에서는 React가 JSX를 사용할 때 항상 동작하고 있었다는 것을 의미한다. 왜 div와 같은 wrapper 태그가 필요했는지 이제야 이해할 수 있을 것이다.
