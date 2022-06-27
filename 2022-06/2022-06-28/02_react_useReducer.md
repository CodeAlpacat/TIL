## useReducer

- useReducer은 여러 개의 state가 하나로 묶여야할 필요가 있을 때 사용하는 hook이다.
- 기본적으로, useState의 setState는 최신의 정보를 받아와 오작동을 막기 위해 **함수형으로 첫 인자로 state를 받아 반환해야한다.** 하지만, setState안에서 자기 자신의 state가 아닌 다른 데이터만으로 값을 바꿔줘야할 때는, 최신의 값을 받아오고 있다는 보장이 없다.
- 그러므로, 관련이 있는 state들 끼리 묶어 관리하는게 방법이다.



### 기본 동작

```react
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn)
```

- `state` - 현재 스냅샷(값)

- `dispatchFn` - useState와 비슷하지만, 정확히는 값을 `action`으로써  **전달(dispatch)**하는 역할을 가진다.

- `reducerFn` - 일반 함수로 선언되어 개별로 존재한다.

  - 아래와 같이 두 인자를 받아오는 형태를 가진다.

  - ```react
    const [state, dispatchFn] = useReducer(reducerFn, {value: '', isValid: false}, initFn)
    
    const reduceFn = (prevState, action) => {
        if (action.type === "USER_INPUT") {
            return {value: action.val, isValid: action.val.includes('@') ? true : false}//기존 state의 형태
            //action으로 받아온 값을 이용했으며, 초기 값과 객체 형태가 통일되어 있음.
        }
        
        else if (action.type === '뭐든지 구분만 해!') {
            return {value: prevState.value, isValid: false} 
        } //prevState는 기존 state 객체의 어떤 값이던지 최신으로 가져옴
        
        
        return newState //newState또한 기존 state와 틀이 같다.
    }
    
    //action 예시
    dispatchFn({type: "USER_INPUT", val: '값'})
    //이 안에 전달될 값은 타입이 자유롭다. 보통은 추가로 사용할 값을 위해 위와 같은 객체를 전달한다.
    //({용도를 식별할 타입용 인자, 값 속성, 값 속성 ...})
    
    ```

  - 첫 인자는 가장 최신의 `state`를 가져오며, `action`은 dispatch되어 전달받은 값이 오게 된다.

  - `action`은 전달해주는 형태를 통일 시켜야하며 `state`또한 마찬가지이다.

  - 객체의 `type` 속성의 경우엔 내부에서 계산되어 반환할 `state`를 구분짓기 위한 용도이다. 그러므로, 얼마나 많은 state들을 묶어서 만들던지 받아오는 값(state)을 활용하고 구분지어 실행할 수 있다.

- `initialState` - 초기의 `state`객체. 기본 `state`들의 틀이 되도록 정의한다. 

- `initFn` - `initialState`가 더욱 복잡하게 작동하는 경우에 사용할 수 있는 초기값을 정해주는 함수이다.



#### 이렇듯, 개별 useState로 다른 state를 가져와 원하지 않는 시점의 오래된 값을 가져올 수 밖에 없으면, 사용하는 state들을 묶어 useReducer로 관리하고 최신의 state를 객체로써 언제든 조작하고 반환해 안전하게 사용할 수 있다. 

