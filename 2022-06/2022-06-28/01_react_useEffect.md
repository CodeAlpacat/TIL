## 1. useEffect

- `useEffect`는 http 요청 등 `sideEffects`를 처리하기 위한 도구이다.

- Vue의 watch 속성과도 같이 특정 값이 변경될 때만, 작동하는 hook이다.
- 리액트 내에서 값이 변하는 경우, 해당 컴포넌트의 데이터가 변경된 직후 해당하는 컴포넌트의 모든 값이 다시 랜더링된다.
- 그렇다면, HTTP 요청을 보내는 함수가 있다면, 다른 값이 변할 때마다, 계속해서 요청을 보내는 것이다.  즉, 요청을 함으로써 변경되는 state로 인해 계속해서 요청을 보내고, 무한루프에 빠질 위험이 있다.
- 그렇기에, `useEffect`는 모든 컴포넌트 평가가 이루어지고, 마지막으로 실행되는데, 그 때 값이 변경되었는지 확인해준다.



### 기본 동작

```react
useEffect(() => { }, [ dependencies ])
```

- useEffect의 첫 인자는 모든 평가 후, 지정된 의존성(`dependencies`)가 변경되었다면 실행하는 함수이다.
- 매번 배열 안에 지정해둔 값이 변화하면, 첫 인자의 함수를 실행해준다.
- 만약 `dependencies`가 빈 `[] `로 값이 들어오면, 초기에 `mount`될 때, 값이 변경되었음으로 감지해 실행하고 다시는 바뀌지 않는다.
  - 추가적으로, 함수가 변하는 경우는 존재하지 않으므로 함수는 넣지 않는다.
  - 왜냐하면, 자바스크립트에서 함수의 내부는 무결하기 때문이다.

- 두 번째 인자가 아예 없다면? `useEffect`가 기능을 상실해 매번 랜더링될 때 실행된다.



### 예시

```react
useEffect(() => {
    setState((state) => state + changeValue)
}, [changeValue])
```

- 위의 `useEffect`는 `changeValue`값이 변화하면, 내부의 함수를 실행하는 기능을 한다.



### Cleanup

```react
useEffect(() => {
    const timecheck = setTimeout(() => {
      console.log('1초 뒤에 실행될 거야!')
      setState((state) => state + changeValue)
    }, 1000)
    
    return () => {
        console.log("CLEAN UP")
        clearTimeout(timecheck)
    } 
}, [changeValue])
```

- 어떠한 동작, 클릭, 타입 시에 `changeValue`가 변경된다면 어떻게 될까?
- http 요청을 보내는 동작이라고 생각하면, 엄청나게 많은 요청을 보내야할 부담이 생긴다.
- 그렇기에, 첫 실행 시에는 `setTimeout`함수 내부를 제외하고 아무 일도 일어나지 않지만, 다시 값이 바뀌면, `console.log("CLEAN UP")`을 가장 먼저 실행한다.

- 위를 보면, setTimeout의 내부가 실행되기 직전에 또 다시 `changeValue`의 값이 바뀌고 useEffect가 실행되면 `clearTimeout`에 의해서 동작을 막을 수 있다.
  - 즉, 타이핑을 한다고 가정하면, 타이핑이 1초 이상 멈추지 않는 이상 계속해서 동작을 선제적으로 멈추는 작업을 하고있는 것이다.
