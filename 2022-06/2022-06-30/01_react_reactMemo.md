## 리액트의 재평가

- 리액트는 컴포넌트의 상태가 변화하면 해당 컴포넌트를 랜더링한다. 그리고, 그 하위 컴포넌트들 또한 전부 랜더링되는 작업을 거치게 된다.
- 하지만, 가상DOM트리의 깊이가 깊은 컴포넌트에서는 바뀌지 않는 정보들이 있음에도 랜더링이 불필요하게 일어나게된다.
- 이 때, `useCallback`과 `React.memo`를 활용할 수 있다.



## 활용

- 최상위 컴포넌트인 `App.js`의 예시다.

- `App.js`의 하위 컴포넌트 `Component1` 과 `Button`컴포넌트가 있다.

  - `Component1`아래에 수많은 컴포넌트들이 존재하면 `show` 라는 `props`가 바뀔때마다 재평가를 시행하고, 이는 성능 저하를 일으킨다.
  - 이러한 경우에 `Component1`컴포넌트 내부에 `export default React.memo(Component1)`으로 **`props`가 바뀌지 않을 경우**에 재평가를 하지 않는 컴포넌트로 지정할 수 있다.
  - 아래와 같이 `boolean`값인 `false`만 존재하면 아무 문제가 없지만, **배열, 객체** 등은 같은 내용물을 가지고 있어도, 저장 주소는 다르기에 매번 다시 생성하게 된다.

- `Button`과 `Component1` 둘 다, `React.memo`를 적용했다면, `Component1`은 재평가가 일어나지 않고, `Button`은 값이 바뀌지 않아도 재평가가 일어난다. 왜 일까?

  - 그 이유는, `newFunction`은 `setState`로 인해 재평가가 될 때, 새로 랜더링이 되므로, 기능은 똑같은 아예 새로운 함수로 재생성되기 때문이다.

  - 그렇기에 **함수를 메모리에 저장**하는 `useCallback`을 사용하면 함수 자체가 메모리에 저장되어 재생성을 방지하게되고, `onClick`안에 들어가는 `newFunction`또한 같은 값을 가지게 된다.

    - ```react
      // useCallback => 메모리에 함수 저장
      const newFunction = useCallback(() => {
      	setState((bool) => !bool);
      }, [의존성 배열]) //의존성 배열이 바뀌는 경우에만 재평가가 일어난다. //빈 배열인 경우엔 그대로 저장되어 바뀌지 않음
      //이렇게 바꾸면 같은 함수가 같은 주소를 바라보기 때문에, 재평가가 일어나지 않는다.
      ```

```react
//App.js

const [state, setState] = useState(false);

const newFunction = () => {
	setState((bool) => !bool);
}

return (
	<div className="app">
      <h1>Hi!</h1>
      <Component1 show={false}/>
      <Button onClick={newFunction}/>
    </div>
)
```

### *useMemo

- `useMemo`는 함수가 아닌 데이터의 형태를 메모리에 저장해주는 역할을 한다.

- 사용은 함수 형태로 반환해야한다.

- 데이터 그 자체를 `props`로 넘겨주는 경우

  - ```react
    const {items} = props
    const sortedList = 	useMemo(() => {
        return props.items.sort((a, b) => a - b)
    }, [items]) //items가 바뀌는 경우만 재평가
    ```

  - `sort`와 같은 정렬은 배열의 주소가 다른 새로운 배열을 매번 생성하고 다시 연산하는 작업에 엄청난 자원을 소모할 수 있다.

  - 그러므로, 위와 같이 데이터 자체를 메모리에 기억시키고, 해당 주소를 항상 가리키게 만들어 랜더링이 다시 일어날 때, 같은 주소의 `items`가 바뀌는지만 확인해 쓸모없는 재평가를 방지할 수 있다.

#### 이렇게 편리하면 모든 곳에 사용하면 되지 않을까? 라고 생각하지말자. useCallback과 react.memo도 자원을 많이 소모한다! 상위 컴포넌트에서 잘 활용하면, 하위의 수많은 컴포넌트의 재생성을 방지할 수 있다.

- 그러므로, 가장 하위 컴포넌트마다 사용해줄 필요는 없다.