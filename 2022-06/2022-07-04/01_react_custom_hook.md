## Redux

- redux는 앱 전역에서 관리하는 상태 관리 툴이다.

- `redux`와 `useContext`는 전역에서 관리한다는 점에서 닮았다. 하지만, `useContext`는 단점이 존재한다.

  - useContext로 사용될 컴포넌트가 대규모 앱에서는 너무 많이 중첩될 수 있다.
    - 심하게 중첩된 JSX
    - 너무 다양한 `ContextProvider`
    - 유지하기 힘든 거대한 `ContextProvider`
  - 너무 자주 상태가 변경되는 작업에는 성능 저하가 심함.

  

## 1) Redux의 작동 방식

- 컴포넌트는 하나의 중앙 데이터 저장소를 `구독`한다.

- 중앙 데이터 저장소는 데이터가 변하면 컴포넌트에 알리고 필요한 데이터를 받는다.

- 컴포넌트는 데이터를 **절대 조작하지 않는다.**

- Redux의 중앙 데이터 저장소는 `State` 즉, 상태로써 존재한다.

  

### 1. Reducer

- Reducer는 **데이터의 변형(Mutation)**을 담당한다.
- useReducer와는 다른 개념이다.
- ex) 숫자 리스트를 받아 숫자의 합으로 변화시킴.



### 2. Action

- 컴포넌트가 `발송(Dispatch)`하는 것이다.
  - 버튼을 클릭하면 `Dispatch`된 `Action`이 `Reducer`로 알린다.
  - `Action`을 받은 `Reducer`는 받은 작업을 수행해 `상태(State)`를 변화시켜 그대로 중앙 데이터 저장소에 저장해 관리한다.
